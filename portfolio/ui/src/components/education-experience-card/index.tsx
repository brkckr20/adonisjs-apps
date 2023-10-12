import React from "react";

interface IProps {
  tip?: "iş" | "eğitim";
  tarih?: string;
}

const EducationExperienceCard: React.FC<IProps> = ({
  tarih = "2020 - Present",
}) => {
  return (
    <div className={`border-primary my-8 `}>
      {" "}
      {/* border-r -> komponent durumuna göre bir sağda ve bir solda olacak */}
      <div>
        <h1 className="text-base text-gray-400">{tarih}</h1>
      </div>
      <div>
        <h2 className="text-white text-2xl my-2">
          Framer Desinger & Developer
        </h2>
        <h3 className="text-[13px] text-gray-400">Brunodee Agency</h3>
      </div>
    </div>
  );
};

export default EducationExperienceCard;
