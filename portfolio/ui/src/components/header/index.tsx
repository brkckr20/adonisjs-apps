import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-white max-w-custom mx-auto flex justify-between items-center py-4">
      <div className="text-3xl font-semibold">BURAK</div>
      <ul className="flex items-center justify-center gap-8">
        <li className="text-white hover:text-white duration-300 ease-in-out">
          <Link to="/">Home</Link>
        </li>
        <li className="text-secondary hover:text-white duration-300 ease-in-out">
          <Link to="/about">About</Link>
        </li>
        <li className="text-secondary hover:text-white duration-300 ease-in-out">
          Works
        </li>
        <li className="text-secondary hover:text-white duration-300 ease-in-out">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div>
        <button className="bg-[#323232] py-2 px-6 rounded-2xl font-semibold hover:text-black hover:bg-white duration-300 ease-out">
          Let's talk
        </button>
      </div>
    </div>
  );
};

export default Header;
