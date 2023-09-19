import EducationExperienceCard from "../components/education-experience-card/index";
import PageName from "../components/page-name";

const Resume = () => {
  return (
    <div className="mb-28" id="resume">
      <div>
        <PageName icon="resume" title="RESUME" size={24} link="#resume" />
        <div className="mt-12">
          <h1 className="text-5xl font-light">
            Education &<span className="text-primary"> Experience </span>
          </h1>
          <h2 className="text-secondary max-w-lg my-10">
            <EducationExperienceCard />
            <EducationExperienceCard />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Resume;
