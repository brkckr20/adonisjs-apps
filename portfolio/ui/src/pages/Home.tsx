import PageName from "../components/page-name";
import turningImg from "../assets/round-text.png";
import Icon from "../icons";

const Home = () => {
  return (
    <div className="mb-28" id="home">
      <div>
        <PageName icon="home" title="INTRODUCE" size={24} link="#home" />
        <div className="mt-12">
          <h1 className="text-[78px] font-light leading-[80px]">
            Say Hi from <span className="text-primary">Drake</span>, Webflow
            Designer and Developer
          </h1>
          <h2 className="text-secondary max-w-lg my-10">
            I design and code beautifully simple things and i love what i do.
            Just simple like that!
          </h2>
          <div className="flex justify-end">
            <div className="relative animate-bounce">
              <Icon
                name="arrowBottom"
                className="fill-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                size={44}
              />
              <img src={turningImg} alt="projects" />
            </div>
          </div>
          <div className="flex gap-x-10">
            <div>
              <h1 className="text-7xl text-primary my-6">10 + </h1>
              <h2 className="text-sm text-secondary">YEARS OF EXPERIENCE </h2>
            </div>
            <div>
              <h1 className="text-7xl text-primary my-6">15 + </h1>
              <h2 className="text-sm text-secondary">
                PROJECTS COMPLETED ON 15 COUNTRIES{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
