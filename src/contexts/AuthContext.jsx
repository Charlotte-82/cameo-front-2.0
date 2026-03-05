import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [client, setClient] = useState(null);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/auth/status`, {
          credentials: "include",
        });

        if (response.ok) {
          const data = await response.json();
          setIsAuthenticated(true);
          setClient(data.client);
        } else {
          setIsAuthenticated(false);
          setClient(null);
        }
      } catch (error) {
        console.error(
          "Erreur lors de la vérification de l'authentification :",
          error,
        );
        setIsAuthenticated(false);
        setClient(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, [API_BASE_URL]);

  // const login = async (mail, password) => {
  //   try {
  //     const response = await fetch(`${API_BASE_URL}/auth/login`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ client_mail: mail, client_password: password }),
  //       credentials: "include",
  //     });

  //     if (!response.ok) {
  //       throw new Error("Échec de la connexion");
  //     }

  //     const data = await response.json();
  //     setIsAuthenticated(true);
  //     setClient(data.client);
  //     return data;
  //   } catch (error) {
  //     console.error("Erreur de connexion :", error);
  //     throw error;
  //   }
  // };

  const login = async (mail, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ client_mail: mail, client_password: password }),
        credentials: "include",
      });

      // 1. On récupère le JSON dans tous les cas
      const data = await response.json();

      // 2. Si la réponse est en erreur (ex: 403)
      if (!response.ok) {
        // On crée une erreur mais on y attache les données du serveur
        const error = new Error(data.message || "Échec de la connexion");
        error.response = { data: data }; // On simule la structure d'Axios pour ne pas casser ta modale
        throw error;
      }

      // 3. Si tout va bien
      setIsAuthenticated(true);
      setClient(data.client);
      return data;
    } catch (error) {
      console.error("Erreur de connexion :", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await fetch(`${API_BASE_URL}/auth/logout`, {
        credentials: "include",
      });
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
    } finally {
      setIsAuthenticated(false);
      setClient(null);
    }
  };

  const value = {
    isAuthenticated,
    isLoading,
    client,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
