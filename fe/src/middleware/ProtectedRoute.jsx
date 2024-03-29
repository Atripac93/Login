import React from "react";
import { Outlet } from "react-router-dom";
import Login from "../pages/Login";

const isAuthorized = () => {
  return JSON.parse(localStorage.getItem("auth"));
};

const ProtectedRoute = () => {
  const isUserLoggedIn = isAuthorized();
  return isUserLoggedIn ? <Outlet /> : <Login />;
};

export default ProtectedRoute;
