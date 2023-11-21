import React from "react";
import Icon from "../../icons";

interface IProps {
  children: React.ReactNode;
  isBottomIcon?: boolean;
  height?: "h-full" | "h-max";
}

const GridBox: React.FC<IProps> = ({
  children,
  isBottomIcon = true,
  height = "h-full",
}) => {
  return (
    <div
      className={`bg-gradient-to-r from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.1)] rounded-2xl shadow shadow-black/50 relative group ${height}`}
    >
      {children}
      {isBottomIcon ? (
        <Icon
          name="leaveSite"
          className="absolute right-6 bottom-4 fill-secondary group-hover:fill-white duration-300"
          size={32}
        />
      ) : null}
    </div>
  );
};

export default GridBox;
