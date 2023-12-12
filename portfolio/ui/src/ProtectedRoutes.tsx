import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

interface IProps {
  children: React.ReactNode;
}

const ProtectedRoutes: React.FC<IProps> = ({ children }) => {
  const status = useSelector((state: RootState) => state.auth.status);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  if (status === "pending") {
    return <div>Yükleniyor</div>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoutes;
