import React, { useEffect, useState } from "react";

function UserDataManagement() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [clients, setClients] = useState([]);
  const [products, setProducts] = useState([]);
  const [existingPassword, setExistingPassword] = useState(null);
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    mail: "",
    tel: "",
    newsletter: false,
    product_id: "",
    password: "",
  });

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchClients();
    fetchProducts();
  }, []);

  const fetchClients = async () => {
    const res = await fetch(`${API_BASE_URL}/client`);
    const data = await res.json();
    setClients(data);
  };

  const fetchProducts = async () => {
    const res = await fetch(`${API_BASE_URL}/product`);
    const data = await res.json();
    const allowed = data.filter((p) =>
      ["gateau-entier", "gateau-part"].includes(p.type)
    );

    setProducts(allowed);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const resetForm = () => {
    setForm({
      firstname: "",
      lastname: "",
      mail: "",
      tel: "",
      newsletter: false,
      product_id: "",
      password: "",
    });
    setEditingId(null);
    setExistingPassword(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      password: editingId ? existingPassword : form.password,
      password: editingId ? existingPassword : form.password?.trim(),
    };

    if (!payload.password) {
      alert("Mot de passe manquant.");
      return;
    }

    const url = editingId
      ? `${API_BASE_URL}/client/${editingId}`
      : `${API_BASE_URL}/client`;

    const method = editingId ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    fetchClients();
    resetForm();
  };

  const handleEdit = async (client) => {
    const res = await fetch(`${API_BASE_URL}/client/${client.id}`);
    const fullClient = await res.json();

    setExistingPassword(fullClient.password);

    setForm({
      firstname: fullClient.firstname,
      lastname: fullClient.lastname,
      mail: fullClient.mail,
      tel: fullClient.tel ?? "",
      newsletter: fullClient.newsletter,
      product_id: fullClient.product_id ?? "",
    });

    setEditingId(client.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Supprimer définitivement ce client ?")) {
      await fetch(`${API_BASE_URL}/client/${id}`, { method: "DELETE" });
      fetchClients();
    }
  };

  return (
    <div className="userManagementCompo">
      <h2>Gestion des utilisateurs</h2>

      <form onSubmit={handleSubmit} className="adminForm3">
        <fieldset>
          <input
            name="lastname"
            placeholder="Nom"
            value={form.lastname}
            onChange={handleChange}
            required
          />
          <br></br>
          <input
            name="firstname"
            placeholder="Prénom"
            value={form.firstname}
            onChange={handleChange}
            required
          />
          <br></br>
          <input
            name="mail"
            placeholder="Email"
            value={form.mail}
            onChange={handleChange}
            required
          />
          <br></br>
          <input
            name="tel"
            placeholder="Téléphone"
            value={form.tel}
            onChange={handleChange}
          />
          <br></br>

          <label>
            <input
              type="checkbox"
              name="newsletter"
              checked={form.newsletter}
              onChange={handleChange}
            />
            Newsletter
          </label>
          <br></br>

          <select
            name="product_id"
            value={form.product_id}
            onChange={handleChange}
          >
            <option value="">-- Gâteau préféré --</option>
            {products.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} ({p.type})
              </option>
            ))}
          </select>
          <br></br>
          {!editingId && (
            <input
              name="password"
              type="password"
              placeholder="Mot de passe"
              value={form.password}
              onChange={handleChange}
              required
            />
          )}
          <br></br>
          <button
            type="submit"
            style={{ marginTop: "1em", marginRight: "1em" }}
          >
            {editingId ? "Modifier" : "Ajouter"}
          </button>
          {editingId && (
            <button type="button" onClick={resetForm}>
              Annuler la modification
            </button>
          )}
        </fieldset>
      </form>

      <div className="client-grid">
        {clients.map((client) => {
          const favProduct = products.find((p) => p.id === client.product_id);

          return (
            <div className="client-card" key={client.id}>
              <h3>
                {client.firstname} {client.lastname}
              </h3>

              <div className="client-info">
                <span>Email</span>
                <span>{client.mail}</span>

                <span>Téléphone</span>
                <span>{client.tel || "—"}</span>

                <span>Newsletter</span>
                <span>{client.newsletter ? "Oui" : "Non"}</span>

                <span>Gâteau préféré</span>
                <span>{favProduct ? `${favProduct.name}` : "Aucun"}</span>
              </div>
              <div style={{ marginTop: "1em", display: "flex", gap: "0.5rem" }}>
                <button onClick={() => handleEdit(client)}>Modifier</button>

                <button onClick={() => handleDelete(client.id)}>
                  Supprimer
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserDataManagement;
