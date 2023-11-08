import React from "react";

interface IProps {
  tip?: "iş" | "eğitim";
  tarih?: string;
  values?: any;
}

const EducationExperienceCard: React.FC<IProps> = ({ values }) => {
  return (
    <div className={`border-primary my-8 `}>
      {" "}
      {/* border-r -> komponent durumuna göre bir sağda ve bir solda olacak */}
      <div>
        <h1 className="text-base text-gray-400">
          {values?.extra.startedMonth}/{values?.extra.startedYear} -{" "}
          {values?.extra.endYear
            ? values?.extra.endMonth + "/" + values?.extra.endYear
            : "Present"}
        </h1>
      </div>
      <div>
        <h2 className="text-white text-2xl my-2">{values?.info.name}</h2>
        <h3 className="text-[13px] text-gray-400">{values?.info.place}</h3>
      </div>
    </div>
  );
};

export default EducationExperienceCard;
