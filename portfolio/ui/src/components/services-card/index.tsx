import Icon from "../../icons";

const ServicesCard = () => {
  return (
    <div className="flex max-w-2xl border border-gray-500 p-6 rounded-2xl">
      <div className="flex-1">
        <h1>Website Design</h1>
        <h2>I created digital products with unique ideas use Figma & Framer</h2>
        <h3>24 PROJECTS</h3>
      </div>
      <div>
        <Icon name="webSite" className="fiil-primary" />
      </div>
    </div>
  );
};

export default ServicesCard;
