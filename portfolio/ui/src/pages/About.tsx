import { useQuery } from "react-query";
import { getJobAndEdu, getPublicUser } from "../api";
import EducationExperienceCard from "../components/education-experience-card";
import GridBox from "../components/grid-box";
import { Zoom, Slide } from "react-awesome-reveal";
import { API_URL } from "../config";

const About = () => {
  const { isLoading, data } = useQuery("getJobAndEdu", getJobAndEdu);
  const { data: userData, isLoading: userLoading } = useQuery(
    "fetch/getPublicUser",
    getPublicUser
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (userLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-full">
      <div className="flex gap-4">
        <Zoom>
          <div className="h-full flex items-center">
            <GridBox isBottomIcon={false}>
              <div className="p-6 rounded-xl">
                <img
                  src={`${API_URL + userData?.resim}`}
                  alt="profile-resim"
                  width={550}
                />
              </div>
            </GridBox>
          </div>
        </Zoom>
        <div className="">
          <Zoom>
            <div className="h-full">
              <GridBox isBottomIcon={false}>
                <div className="h-full flex flex-col">
                  <div className="flex-1 pl-6">
                    <img
                      src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon2.png"
                      alt="about"
                    />
                  </div>
                  <div className="px-6">
                    <h1 className="text-white text-4xl font-medium mb-6">
                      {userData?.ad_soyad}
                    </h1>
                    <p className="text-white mb-6">
                      I am a web developer who enjoys and is passionately
                      committed to their work. Since graduating in 2020, I have
                      been doing this job with great pleasure and learning new
                      things every day by keeping myself updated with new
                      knowledge. I love learning and researching.
                    </p>
                  </div>
                </div>
              </GridBox>
            </div>
          </Zoom>
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <div className="w-full h-full">
          <Slide direction="left" className="h-full">
            <GridBox isBottomIcon={false}>
              <div className="p-[30px] h-full">
                <h1 className="text-white text-base">EXPERIENCES</h1>
                {data
                  .filter((item: any) => {
                    return item.info.type === "is";
                  })
                  .map((i: any, index: number) => (
                    <EducationExperienceCard key={index} values={i} />
                  ))}
              </div>
            </GridBox>
          </Slide>
        </div>
        <div className="w-full">
          <Slide direction="right">
            <GridBox isBottomIcon={false}>
              <div className="p-[30px]">
                <h1 className="text-white text-base uppercase">education</h1>
                {data
                  .filter((item: any) => {
                    return item.info.type === "egitim";
                  })
                  .map((i: any, index: number) => (
                    <EducationExperienceCard key={index} values={i} />
                  ))}
              </div>
            </GridBox>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default About;
