"use client";

import React, { Fragment } from "react";
import HomePage from "@/components/HomePage";
import ProfileCard from "@/components/ProfileCard";
import { useQuery } from "react-query";
import axios from "axios";
import Loader from "@/components/bilesenler/Loader";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Home = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const { isLoading, error, data } = useQuery("repoData", () =>
    axios.get(`http://127.0.0.1:3333/user`).then((res) => res.data)
  );
  if (isLoading)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Loader loading={isLoading} />
      </div>
    );
  return (
    <Fragment>
      <div className="grid grid-cols-4 p-4 h-full selection:bg-primary">
        <div className="col-span-1 h-full">
          <ProfileCard item={data} />
        </div>
        <div className="col-span-3">
          <HomePage setIsOpen={toggleDrawer} />
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        size={300}
        duration={200}
      >
        <div className="text-black">Hello World</div>
      </Drawer>
    </Fragment>
  );
};

export default Home;
