// src/components/UserPrivateRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx"; // Importez le hook useAuth

const UserPrivateRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default UserPrivateRoute;
