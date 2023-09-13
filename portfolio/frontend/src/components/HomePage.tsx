"use client";

import React from "react";
import Icon from "./icons";

const HomePage = ({ setIsOpen }: any) => {
  return (
    <div className="pt-6 flex h-full">
      <div className="flex-1">1.kısım</div>
      <div className="h-full px-5 flex flex-col">
        <div
          className="mt-2 cursor-pointer border border-secondary hover:border-primary p-2 rounded-full"
          onClick={setIsOpen}
        >
          <Icon
            name="mobileMenu"
            fill="#999999"
            className="text-secondary"
            size={28}
          />
        </div>
        <div className="h-full items-center flex flex-col justify-center gap-y-4">
          <span className="inline-flex w-10 h-10 border border-primary rounded-full items-center justify-center">
            1
          </span>
          <span className="inline-flex  w-10 h-10 border border-primary rounded-full items-center justify-center ">
            2
          </span>
          <span className="inline-flex  w-10 h-10 border border-primary rounded-full items-center justify-center ">
            3
          </span>
          <span className="inline-flex  w-10 h-10 border border-primary rounded-full items-center justify-center ">
            4
          </span>
          <span className="inline-flex  w-10 h-10 border border-primary rounded-full items-center justify-center ">
            5
          </span>
          <span className="inline-flex  w-10 h-10 border border-primary rounded-full items-center justify-center ">
            6
          </span>
          <span className="inline-flex  w-10 h-10 border border-primary rounded-full items-center justify-center ">
            7
          </span>
          <span className="inline-flex  w-10 h-10 border border-primary rounded-full items-center justify-center ">
            8
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
