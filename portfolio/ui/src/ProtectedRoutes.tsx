import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const useAuth = () => {
  const user = { loggedIn: false };
  return user && user.loggedIn;
};

interface IProps {
  children: React.ReactNode;
}

const ProtectedRoutes: React.FC<IProps> = ({ children }) => {
  const isAuth = useAuth();
  return isAuth ? (
    <React.Fragment>{children}</React.Fragment>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoutes;
