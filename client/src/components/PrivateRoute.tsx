import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../states/AuthContext";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isLoggedIn } = useAuth();

  // If the user is not logged in, redirect to the login page
  return isLoggedIn ? <>{children}</> : <Navigate to="/auth" />;
};

export default PrivateRoute;
