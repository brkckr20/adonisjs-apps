import { ProfileCard } from "./components/profile-card";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import RightMenu from "./components/right-menu";

function App() {
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
        </div>
      </div>
      <div>
        <RightMenu />
      </div>
    </div>
  );
}

export default App;
