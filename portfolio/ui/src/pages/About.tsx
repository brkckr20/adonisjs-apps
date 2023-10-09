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
          <div>
            <h1 className="text-7xl font-bold text-white text-center">
              SELF-SUMMARY
            </h1>
            <GridBox isBottomIcon={false}>
              <div className="h-full">
                <h1>David Henderson</h1>
                <p>
                  I am a San francisco-based product designer with a focus on
                  web design, illustration, a visual development. I have a
                  diverse range of experience having worked across various
                  fields and industries.
                </p>
              </div>
            </GridBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
