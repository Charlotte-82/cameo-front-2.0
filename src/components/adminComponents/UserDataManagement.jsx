import React, { useEffect, useState } from "react";

function UserDataManagement() {
  const [users, setUsers] = useState([]);
  const [allCakes, setAllCakes] = useState([]);
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
    Promise.all([
      fetch(`${API_BASE_URL}/fullcakes`).then((res) => res.json()),
      fetch(`${API_BASE_URL}/cakes`).then((res) => res.json()),
    ])
      .then(([fullcakes, slicedcakes]) => {
        const combinedCakes = [
          ...fullcakes.map((cake) => ({
            ...cake,
            id_cake: `full-${cake.id}`, // identifiant unique
            name: cake.name, // nom lisible
            type: "full",
            id: cake.id, // garde l’ID original pour comparer plus tard
          })),
          ...slicedcakes.map((cake) => ({
            ...cake,
            id_cake: `sliced-${cake.id_cake}`,
            name: cake.name, // ⚠️ ajouté : sinon "undefined" !
            type: "sliced",
            id: cake.id_cake, // garde l’ID original pour comparer plus tard
          })),
        ];
        setAllCakes(combinedCakes);
      })
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

    let cakeId = null;
    let cakeType = null;

    // Vérifie que l'utilisateur a choisi un gâteau
    if (form.id_cake) {
      [cakeType, cakeId] = form.id_cake.split("-");
    }

    const userData = {
      lastname: form.lastname,
      firstname: form.firstname,
      email: form.email,
      tel: form.tel,
      newsletter: form.newsletter,
      cake_id: cakeId ? parseInt(cakeId) : null,
      cake_type: cakeType || null,
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
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Erreur lors de l’enregistrement");
      }

      fetchUsers();
    } catch (error) {
      console.error(error);
    } finally {
      // Reset du formulaire
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
    let selectedCakeId = "";

    if (user.cake_id && user.cake_type) {
      // On reconstruit l'id unique pour le select
      selectedCakeId = `${user.cake_type}-${user.cake_id}`;
    }

    setForm({
      lastname: user.lastname || "",
      firstname: user.firstname || "",
      email: user.email || "",
      tel: user.tel || "",
      newsletter: user.newsletter?.toString() || "0",
      id_cake: selectedCakeId,
      password: "",
      is_admin: user.is_admin?.toString() || "0",
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

  const getCakeName = (cake_id, cake_type) => {
    if (!cake_id || !cake_type) {
      return "Non renseigné";
    }

    const cake = allCakes.find(
      (c) => c.type === cake_type && c.id?.toString() === cake_id?.toString()
    );

    return cake
      ? `${cake.name} ${cake.type === "full" ? "(Entier)" : "(À la part)"}`
      : "Non renseigné";
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
                {allCakes.map((cake) => (
                  <option key={cake.id_cake} value={cake.id_cake}>
                    {cake.name} ({cake.type === "full" ? "Entier" : "À la part"}
                    )
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
                    <td>{getCakeName(user.cake_id, user.cake_type)}</td>
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
          <div className="userCard">
            <div
              className="card"
              style={{
                width: "90%",
                display: "flex",
                flexDirection: "row",
              }}
            >
              {users
                .filter((user) => user.id_user !== 3)
                .map((user) => (
                  <div key={user.id_user} className="card-body">
                    <h5 className="card-title">
                      {user.lastname} {user.firstname}
                    </h5>
                    <div className="card-text">
                      <div className="itemDetail">
                        <span className="label">Email:</span>
                        <span className="value">{user.email}</span>
                      </div>
                      <div className="itemDetail">
                        <span className="label">Téléphone:</span>
                        <span className="value">{user.tel}</span>
                      </div>
                      <div className="itemDetail">
                        <span className="label">Newsletter:</span>
                        <span className="value">
                          {user.newsletter === "1" || user.newsletter === 1
                            ? "Oui"
                            : "Non"}
                        </span>
                      </div>
                      <div className="itemDetail">
                        <span className="label">Gâteau préféré:</span>
                        <span className="value">
                          {getCakeName(user.cake_id, user.cake_type)}
                        </span>
                      </div>
                      <div className="itemDetail">
                        <span className="label">Admin ?:</span>
                        <span className="value">
                          {user.is_admin === "1" || user.is_admin === 1
                            ? "Oui"
                            : "Non"}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleEdit(user)}
                      style={{ marginRight: "1em" }}
                    >
                      Modifier
                    </button>
                    <button onClick={() => handleDelete(user.id_user)}>
                      Supprimer
                    </button>
                  </div>
                ))}
            </div>
          </div>
          <ul className="userList">
            {users
              .filter((user) => user.id_user !== 3)
              .map((user) => (
                <li key={user.id_user} className="userItem">
                  <div className="itemDetail">
                    <span className="label">Nom:</span>
                    <span className="value">{user.lastname}</span>
                  </div>
                  <div className="itemDetail">
                    <span className="label">Prénom:</span>
                    <span className="value">{user.firstname}</span>
                  </div>
                  <div className="itemDetail">
                    <span className="label">Email:</span>
                    <span className="value">{user.email}</span>
                  </div>
                  <div className="itemDetail">
                    <span className="label">Téléphone:</span>
                    <span className="value">{user.tel}</span>
                  </div>
                  <div className="itemDetail">
                    <span className="label">Newsletter:</span>
                    <span className="value">
                      {user.newsletter === "1" || user.newsletter === 1
                        ? "Oui"
                        : "Non"}
                    </span>
                  </div>
                  <div className="itemDetail">
                    <span className="label">Gâteau préféré:</span>
                    <span className="value">
                      {getCakeName(user.cake_id, user.cake_type)}
                    </span>
                  </div>
                  <div className="itemDetail">
                    <span className="label">Admin ?:</span>
                    <span className="value">
                      {user.is_admin === "1" || user.is_admin === 1
                        ? "Oui"
                        : "Non"}
                    </span>
                  </div>
                  <div className="itemActions">
                    <button
                      onClick={() => handleEdit(user)}
                      style={{ marginRight: "1em" }}
                    >
                      Modifier
                    </button>
                    <button onClick={() => handleDelete(user.id_user)}>
                      Supprimer
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserDataManagement;
