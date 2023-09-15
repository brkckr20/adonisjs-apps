import React from "react";
import Icon from "../../icons";

interface IProps {
  icon: string;
  title: string;
  size: number;
}

const PageName: React.FC<IProps> = ({ icon, title, size = 24 }) => {
  return (
    <div>
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
    </div>
  );
};

export default PageName;
