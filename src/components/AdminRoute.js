// src/components/AdminRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AdminRoute = ({ children }) => {
  // Corrigido para buscar a mesma chave usada no login
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

  if (!usuario) {
    return <Navigate to="/auth/login" replace />;
  }

  if (usuario.email !== "admin@gruporeune.com") {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default AdminRoute;
