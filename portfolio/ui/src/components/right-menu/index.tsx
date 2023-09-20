import { Tooltip } from "react-tooltip";

import Icon from "../../icons";
import React from "react";

interface IProps {
  menuOpen: () => void;
}

const RightMenu: React.FC<IProps> = ({ menuOpen }) => {
  return (
    <div className="flex flex-col h-screen pt-16 ml-20">
      <div>
        <button onClick={menuOpen}>
          <Icon name="mobileMenu" className="fill-white" size={28} />
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <ul className="p-3 border border-gray-400 rounded-full flex flex-col gap-4">
          <li>
            <a className="bg-white home" href="#home">
              <Icon name="home" className="fill-white" size={24} />
            </a>
            <Tooltip
              anchorSelect=".home"
              place="left"
              content="Home"
              variant="light"
            />
          </li>
          <li>
            <a className="bg-white about" href="#about">
              <Icon name="about" className="fill-white" size={24} />
            </a>
            <Tooltip
              anchorSelect=".about"
              place="left"
              content="About"
              variant="light"
            />
          </li>
          <li>
            <a className="bg-white resume" href="#resume">
              <Icon name="resume" className="fill-white" size={24} />
            </a>
            <Tooltip
              anchorSelect=".resume"
              place="left"
              content="Resume"
              variant="light"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightMenu;
