// src/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
