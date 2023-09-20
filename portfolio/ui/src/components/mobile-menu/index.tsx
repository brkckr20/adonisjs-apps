import Icon from "../../icons";

export const MobileMenu = () => {
  return (
    <div className="flex h-full w-full flex-col items-center">
      <h1 className="my-20">Menu</h1>
      <ul className="flex flex-col gap-4">
        <li className="flex gap-x-4 group">
          <span>
            <Icon
              name="home"
              size={24}
              className="fill-white group-hover:fill-primary"
            />
          </span>
          <span className="group-hover:text-primary">Home</span>
        </li>
        <li className="flex gap-x-4 group">
          <span>
            <Icon
              name="about"
              size={24}
              className="fill-white group-hover:fill-primary"
            />
          </span>
          <span className="group-hover:text-primary">About</span>
        </li>
        <li className="flex gap-x-4 group">
          <span>
            <Icon
              name="resume"
              size={24}
              className="fill-white group-hover:fill-primary"
            />
          </span>
          <span className="group-hover:text-primary">Resume</span>
        </li>
      </ul>
    </div>
  );
};
