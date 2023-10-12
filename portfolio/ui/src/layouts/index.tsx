import { Outlet } from "react-router-dom";
import Header from "../components/header";

const Layout = () => {
  return (
    <div className="bg-primary min-h-full inter pb-20">
      <Header />
      <main className="max-w-custom mx-auto pt-20">
        <Outlet />
        <div className="text-gray-400 mt-2 justify-end flex w-full">
          <a href="mailto:info@burak-cakir.com.tr">
            <span className="hover:text-white hover:underline">
              Burak Çakır
            </span>{" "}
            &copy;
          </a>
          <p> All rights reserved.</p>
        </div>
      </main>
    </div>
  );
};

export default Layout;
