import React from "react";
import Icon from "../../icons";

interface IProps {
  icon: string;
  title: string;
  size: number;
  link?: string;
}

const PageName: React.FC<IProps> = ({ icon, title, size = 24, link }) => {
  return (
    <div>
      <a href={link}>
        <div className="inline-flex px-3 py-1 rounded-full items-center gap-4 border-[0.1px] border-gray-400 group hover:border-white cursor-pointer">
          <Icon
            name={icon}
            size={size}
            className="fill-secondary group-hover:fill-white"
          />
          <span className="text-secondary group-hover:text-white text-xs">
            {title}
          </span>
        </div>
      </a>
    </div>
  );
};

export default PageName;
