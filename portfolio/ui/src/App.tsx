import { ProfileCard } from "./components/profile-card";

function App() {
  return (
    <div className="bg-info h-full inter text-white flex px-3">
      <div className="">
        <ProfileCard />
      </div>
      <div className="w-full">
        <div>2</div>
      </div>
      <div>
        <div>3</div>
      </div>
    </div>
  );
}

export default App;
