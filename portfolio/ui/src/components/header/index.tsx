import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
  const location = useLocation();
  return (
    <div className="text-white max-w-custom mx-auto flex justify-between items-center py-4">
      <div className="text-3xl font-semibold">
        <img width={150} src={logo} alt="logo" />
      </div>
      <ul className="flex items-center justify-center gap-8">
        <li
          className={` hover:text-white ${
            location.pathname === "/" ? "text-white" : "text-secondary"
          } duration-300 ease-in-out`}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={` hover:text-white ${
            location.pathname === "/about" ? "text-white" : "text-secondary"
          } duration-300 ease-in-out`}
        >
          <Link to="/about">About</Link>
        </li>
        <li
          className={` hover:text-white ${
            location.pathname.startsWith("/works")
              ? "text-white"
              : "text-secondary"
          } duration-300 ease-in-out`}
        >
          <Link to="/works">Works</Link>
        </li>
        <li
          className={` hover:text-white ${
            location.pathname === "/contact" ? "text-white" : "text-secondary"
          } duration-300 ease-in-out`}
        >
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div>
        <button className="bg-[#323232] py-2 px-6 rounded-2xl font-semibold hover:text-black hover:bg-white duration-300 ease-out">
          <Link to="/contact">Let's talk</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
