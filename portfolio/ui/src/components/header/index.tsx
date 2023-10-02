const Header = () => {
  return (
    <div className="text-white max-w-custom mx-auto flex justify-between items-center py-4">
      <div className="text-3xl font-semibold">GridX</div>
      <ul className="flex items-center justify-center gap-4">
        <li className="text-white hover:text-white duration-300 ease-in-out">
          Home
        </li>
        <li className="text-secondary hover:text-white duration-300 ease-in-out">
          About
        </li>
        <li className="text-secondary hover:text-white duration-300 ease-in-out">
          Works
        </li>
        <li className="text-secondary hover:text-white duration-300 ease-in-out">
          Contact
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
