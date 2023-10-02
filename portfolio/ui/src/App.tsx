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
import Header from "./components/header";
import GridBox from "./components/grid-box";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="bg-primary h-full inter">
      <Header />
      <div className="max-w-custom mx-auto  pt-20">
        <div className="grid grid-cols-2 gap-x-4">
          <div>
            <GridBox>
              <div className="px-[50px] py-[46px] flex gap-x-6">
                <div>
                  <img
                    src="https://picsum.photos/id/15/224/224"
                    alt=""
                    className="rounded-tl-3xl rounded-br-3xl"
                  />
                </div>
                <div className="flex flex-col justify-center gap-y-3">
                  <h4 className="text-secondary uppercase text-lg font-semibold">
                    a web designer
                  </h4>
                  <h2 className="text-white text-4xl font-semibold">
                    Burak Çakır
                  </h2>
                  <p className="text-secondary text-md">
                    I am a Web Designer based in Denizli / Turkey.
                  </p>
                </div>
              </div>
            </GridBox>
          </div>
          <div className="flex flex-col gap-y-2">
            <div>
              <GridBox isBottomIcon={false}>
                <div className="uppercase text-white text-center py-2">
                  Latest work and featured
                </div>
              </GridBox>
            </div>
            <div className="grid grid-cols-2 gap-3 h-full">
              <GridBox>
                <div className="p-4">
                  <img
                    src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/sign.png"
                    alt="signature"
                    className="mb-4"
                  />
                  <h2 className="uppercase text-secondary">more about me</h2>
                  <h2 className="text-white">Credentials</h2>
                </div>
              </GridBox>
              <GridBox>
                <div className="p-6">lorem</div>
              </GridBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

/*
<div className="bg-info inter text-white flex px-5">
      <div className="relative">
        <ProfileCard />
      </div>
      <div className="w-full ml-[382px] pt-16 h-full">
        <div className="pl-[330px] max-w-6xl">
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

*/
