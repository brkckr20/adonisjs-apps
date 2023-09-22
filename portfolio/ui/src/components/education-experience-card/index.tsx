import React from "react";

interface IProps {
  tip: string;
}

const EducationExperienceCard: React.FC<IProps> = ({ tip }) => {
  return (
    <div
      className={`pl-12 ${
        tip === "iş" ? "border-l" : "border-r"
      } border-primary my-8 `}
    >
      {" "}
      {/* border-r -> komponent durumuna göre bir sağda ve bir solda olacak */}
      <div>
        <h1 className="text-base">2020 - Present</h1>
      </div>
      <div>
        <h2 className="text-white text-2xl my-2">
          Framer Desinger & Developer
        </h2>
        <h3 className="text-[13px]">Brunodee Agency</h3>
      </div>
    </div>
  );
};

export default EducationExperienceCard;
