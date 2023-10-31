import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header";

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div
      className={`inter ${
        pathname.startsWith("/admin")
          ? "h-full bg-slate-800"
          : "bg-primary min-h-full pb-20"
      }`}
    >
      {pathname.startsWith("/admin") ? null : <Header />}
      <main
        className={`${
          pathname.startsWith("/admin")
            ? "h-full"
            : "max-w-custom mx-auto pt-20"
        } `}
      >
        <Outlet />
        {pathname.startsWith("/admin") ? null : (
          <div className="text-gray-400 mt-2 justify-end flex w-full">
            <a href="mailto:info@burak-cakir.com.tr">
              <span className="hover:text-white hover:underline">
                Burak Çakır
              </span>{" "}
              &copy;
            </a>
            <p> All rights reserved.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Layout;
