import React from "react";
import UserDataManagement from "../components/adminComponents/UserDataManagement";

function UserManagement() {
  return (
    <div className="PastryManager">
      <div className="menuManagement">
        <h1>Gestion des utilisateurs</h1>
        <UserDataManagement />
      </div>
    </div>
  );
}

export default UserManagement;
