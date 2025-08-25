import React, { useEffect, useState } from "react";

function UserDataManagement() {
  const [users, setUsers] = useState([]);
  const [cakes, setCakes] = useState([]);
  const [form, setForm] = useState({
    lastname: "",
    firstname: "",
    email: "",
    tel: "",
    newsletter: "",
    id_cake: "",
    password: "",
    is_admin: "",
  });
  const [editingId, setEditingId] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetchUsers();
    fetchCakes();
  }, []);

  const fetchUsers = () => {
    fetch(`${API_BASE_URL}/users`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erreur HTTP: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then(setUsers)
      .catch((err) =>
        console.error("Erreur lors du fetch des utilisateurs :", err)
      );
  };

  const fetchCakes = () => {
    fetch(`${API_BASE_URL}/cakes`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erreur HTTP: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then(setCakes)
      .catch((err) => console.error("Erreur lors du fetch des gâteaux :", err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let url = `${API_BASE_URL}/users`;
    let method = "POST";

    const userData = {
      lastname: form.lastname,
      firstname: form.firstname,
      email: form.email,
      tel: form.tel,
      newsletter: form.newsletter,
      id_cake: form.id_cake,
      password: form.password,
      is_admin: form.is_admin,
    };

    if (editingId) {
      method = "PUT";
      url = `${API_BASE_URL}/users/${editingId}`;
      userData.id_user = editingId;
    }

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const textResponse = await response.text();
      let result = {};
      try {
        result = JSON.parse(textResponse);
      } catch (jsonParseError) {
        if (response.status !== 204) {
          console.warn("Réponse non JSON reçue du serveur:", textResponse);
        }
      }

      if (!response.ok) {
        const errorMessage =
          result.error ||
          `Erreur HTTP: ${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      }

      // console.log(
      //   "Opération réussie. Message du serveur :",
      //   result.message || "Aucun message spécifique."
      // );

      fetchUsers();
    } catch (error) {
      console.error("Erreur lors de l'envoi ou du rechargement :", error);
    } finally {
      setForm({
        lastname: "",
        firstname: "",
        email: "",
        tel: "",
        newsletter: "",
        id_cake: "",
        password: "",
        is_admin: "",
      });
      setEditingId(null);
    }
  };

  const handleEdit = (user) => {
    setForm({
      lastname: user.lastname,
      firstname: user.firstname,
      email: user.email,
      tel: user.tel,
      newsletter: user.newsletter,
      id_cake: user.id_cake,
      password: user.password,
      is_admin: user.is_admin,
    });
    setEditingId(user.id_user);
  };

  const handleDelete = (id) => {
    fetch(`${API_BASE_URL}/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          if (res.status === 204) return null;

          return res
            .json()
            .then((errorData) => {
              throw new Error(
                errorData.error ||
                  `Erreur lors de la suppression: ${res.status}`
              );
            })
            .catch(() => {
              return res.text().then((text) => {
                throw new Error(
                  text || `Erreur lors de la suppression: ${res.status}`
                );
              });
            });
        }
        return res.text();
      })
      .then((text) => {
        if (text) console.log("Suppression réussie, réponse:", text);
        else console.log("Utilisateur supprimé avec succès.");
        fetchUsers();
      })
      .catch((err) =>
        console.error("Erreur lors de la suppression de l'utilisateur :", err)
      );
  };

  return (
    <div className="userManagementCompo">
      <h2>Gestion des Utilisateurs</h2>
      <div className="allUserDiv">
        <div className="userAddDiv">
          <h3>
            {editingId ? "Modifier un utilisateur" : "Ajouter un utilisateur"}
          </h3>
          <form onSubmit={handleSubmit} className="adminForm3">
            <fieldset>
              <label>Nom</label>
              <br />
              <input
                name="lastname"
                placeholder="Nom"
                value={form.lastname}
                onChange={handleChange}
                required
              />
              <br />
              <br />
              <label>Prénom</label>
              <br />
              <input
                name="firstname"
                placeholder="Prénom"
                value={form.firstname}
                onChange={handleChange}
                required
              />
              <br />
              <br />
              <label>Email</label>
              <br />
              <input
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <br />
              <br />
              <label>Téléphone</label>
              <br />
              <input
                name="tel"
                placeholder="Téléphone"
                value={form.tel}
                onChange={handleChange}
                required
              />
              <br />
              <br />
              <label>L'utilisateur accepte-t-il la newsletter ?</label>
              <br />
              <input
                name="newsletter"
                type="radio"
                value="1"
                checked={form.newsletter === "1"}
                onChange={handleChange}
                required
              />
              <label className="labelRadioNews">oui</label>
              <input
                name="newsletter"
                type="radio"
                value="0"
                checked={form.newsletter === "0"}
                onChange={handleChange}
                required
              />
              <label className="labelRadioNews">non</label>
              <br />
              <br />
              <label>Gâteau préféré</label>
              <br />
              <select
                name="id_cake"
                value={form.id_cake}
                onChange={handleChange}
                required
              >
                <option value="">--Choisissez un gâteau préféré--</option>
                {cakes.map((cake) => (
                  <option key={cake.id_cake} value={cake.id_cake}>
                    {cake.name}
                  </option>
                ))}
              </select>
              <br />
              <br />
              <label>Mot de passe</label>
              <br />
              <input
                name="password"
                placeholder="Mot de passe"
                type="password"
                value={form.password}
                onChange={handleChange}
                required={!editingId}
              />
              <br />
              <br />
              <label>L'utilisateur est-il un administrateur ?</label>
              <br />
              <input
                type="radio"
                name="is_admin"
                value="1"
                checked={form.is_admin === "1"}
                onChange={handleChange}
              />{" "}
              <label className="labelRadioNews">oui</label>
              <input
                type="radio"
                name="is_admin"
                value="0"
                checked={form.is_admin === "0"}
                onChange={handleChange}
              />{" "}
              <label className="labelRadioNews">non</label>
              <br></br>
              <br></br>
              <button type="submit">
                {editingId ? "Modifier" : "Ajouter"}
              </button>
            </fieldset>
          </form>
        </div>
        <div className="userTableDiv">
          <h3>Liste des utilisateurs</h3>

          <table className="userTable">
            <thead>
              <tr>
                {/* <th>ID</th> */}
                <th>Nom</th>
                <th>Prénom</th>
                <th>email</th>
                <th>Téléphone</th>
                <th>Newsletter</th>
                <th>Gâteau préféré</th>
                <th>Admin ?</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users
                .filter((user) => user.id_user !== 3)
                .map((user) => (
                  <tr key={user.id_user} className="tableRank3">
                    {/* <td>{user.id_user}</td> */}
                    <td>{user.lastname}</td>
                    <td>{user.firstname}</td>
                    <td>{user.email}</td>
                    <td>{user.tel}</td>
                    <td>
                      {user.newsletter === "1" || user.newsletter === 1
                        ? "Oui"
                        : "Non"}
                    </td>
                    <td>{user.cake_name}</td>
                    <td>
                      {user.is_admin === "1" || user.is_admin === 1
                        ? "Oui"
                        : "Non"}
                    </td>
                    <td>
                      <button onClick={() => handleEdit(user)}>Modifier</button>
                      <button onClick={() => handleDelete(user.id_user)}>
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserDataManagement;
