import { useState } from "react";
import Drawer from "react-modern-drawer";

import { ProfileCard } from "./components/profile-card";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import RightMenu from "./components/right-menu";

import "react-modern-drawer/dist/index.css";
import { MobileMenu } from "./components/mobile-menu";
import Services from "./pages/Services";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="bg-info inter text-white flex px-5">
      <div className="relative">
        <ProfileCard />
      </div>
      <div className="w-full ml-[382px] pt-16 h-full">
        <div className="pl-[330px]">
          <Home />
          <About />
          <Resume />
          <Services />
        </div>
      </div>
      <div>
        <RightMenu menuOpen={toggleDrawer} />
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="!bg-info"
        size={300}
      >
        <MobileMenu />
      </Drawer>
    </div>
  );
}

export default App;
