import Icon from "../../icons";

const ServicesCard = () => {
  return (
    <div className="flex max-w-2xl group hover:border-primary duration-150 ease-in-out border border-gray-500 p-6 rounded-2xl mb-6">
      <div className="flex-1 group">
        <h1 className="text-2xl mb-2">Website Design</h1>
        <h2 className="mb-[30px]">
          I created digital products with unique ideas use Figma & Framer
        </h2>
        <a href="/#" className="text-xs group-hover:underline">
          24 PROJECTS
        </a>
      </div>
      <div>
        <Icon name="webSite" className="fiil-primary" />
      </div>
    </div>
  );
};

export default ServicesCard;
