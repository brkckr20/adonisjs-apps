"use client";
import React, { useState, CSSProperties } from "react";

interface IProps {
  loading: boolean;
}

const Loader: React.FC<IProps> = ({ loading }) => {
  return (
    <div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default Loader;
