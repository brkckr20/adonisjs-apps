import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "./redux/user/services";
import { AppDispatch, RootState } from "./redux/store";

interface IProps {
  children: React.ReactNode;
}

const ProtectedRoutes: React.FC<IProps> = ({ children }) => {
  const status = useSelector((state: RootState) => state.user.loading);
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    (async () => {
      dispatch(fetchUser());
    })();
  }, [dispatch]);

  if (status !== "succeeded") {
    return <div>Yükleniyor</div>;
  }

  return isLoggedIn ? (
    <React.Fragment>{children}</React.Fragment>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoutes;
