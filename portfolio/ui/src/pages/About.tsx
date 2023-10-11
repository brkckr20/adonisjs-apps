import EducationExperienceCard from "../components/education-experience-card";
import GridBox from "../components/grid-box";

const About = () => {
  return (
    <div>
      <div className="flex gap-4">
        <div>
          <GridBox isBottomIcon={false}>
            <div className="p-6 rounded-xl">
              <img
                src="https://picsum.photos/id/15/390/390"
                alt="profile-resim"
              />
            </div>
          </GridBox>
        </div>
        <div className="">
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
                    I am a San francisco-based product designer with a focus on
                    web design, illustration, a visual development. I have a
                    diverse range of experience having worked across various
                    fields and industries...
                  </p>
                </div>
              </div>
            </GridBox>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-grow">
          <GridBox>
            <h1>EXPERIENCES</h1>
            <EducationExperienceCard tip="iş" />
          </GridBox>
        </div>
        <div className="flex-grow">
          {" "}
          <GridBox>s</GridBox>
        </div>
      </div>
    </div>
  );
};

export default About;
