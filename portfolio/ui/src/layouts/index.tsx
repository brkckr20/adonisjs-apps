import { Outlet } from "react-router-dom";
import Header from "../components/header";

const Layout = () => {
  return (
    <div className="bg-primary h-full inter">
      <Header />
      <main className="max-w-custom mx-auto pt-20">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
