// PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

  // Se não estiver logado, redireciona para /login
  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  // Se estiver logado, permite acesso ao conteúdo da rota
  return children;
};

export default PrivateRoute; 