// src/components/AdminRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  // Se não estiver logado, redireciona para login
  if (!usuario) {
    return <Navigate to="/auth/login" replace />;
  }

  // Verifica se o e-mail é o do admin
  if (usuario.email !== "admin@gruporeune.com") {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default AdminRoute;
