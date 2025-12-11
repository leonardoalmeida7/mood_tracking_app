import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const ProtectedRoute = () => {
  //const token = localStorage.getItem("token");
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  return <Outlet />; // renderiza as rotas filhas
};

