"use client";

import React from "react";

interface IProps {
  btnText: string;
}

const Button: React.FC<IProps> = ({ btnText }) => {
  return (
    <button className="bg-primary w-full h-14 border-2 border-primary hover:bg-transparent rounded-full text-xl text-black hover:text-primary duration-150">
      {btnText.toUpperCase()}
    </button>
  );
};

export default Button;
