import EducationExperienceCard from "../components/education-experience-card";
import GridBox from "../components/grid-box";
import { Zoom, Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="h-full">
      <div className="flex gap-4">
        <Zoom>
          <div className="h-full flex items-center">
            <GridBox isBottomIcon={false}>
              <div className="p-6 rounded-xl">
                <img
                  src="https://picsum.photos/id/15/390/390"
                  alt="profile-resim"
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
                      Burak Çakır
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
        <div className="w-full">
          <Slide direction="left">
            <GridBox isBottomIcon={false}>
              <div className="p-[30px]">
                <h1 className="text-white text-base">EXPERIENCES</h1>
                <EducationExperienceCard />
                <EducationExperienceCard />
                <EducationExperienceCard />
              </div>
            </GridBox>
          </Slide>
        </div>
        <div className="w-full">
          <Slide direction="right">
            <GridBox isBottomIcon={false}>
              <div className="p-[30px]">
                <h1 className="text-white text-base uppercase">education</h1>
                <EducationExperienceCard />
                <EducationExperienceCard />
                <EducationExperienceCard />
                <EducationExperienceCard />
              </div>
            </GridBox>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default About;
