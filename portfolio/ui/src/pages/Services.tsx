import PageName from "../components/page-name";
import ServicesCard from "../components/services-card";

const Services = () => {
  return (
    <div className="mb-28" id="resume">
      <div>
        <PageName icon="resume" title="RESUME" size={24} link="#resume" />
        <div className="mt-12">
          <h1 className="text-5xl font-light">
            My <span className="text-primary"> Specializations </span>
          </h1>
          <div className="">
            <ServicesCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
