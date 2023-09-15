import PageName from "../components/page-name";

const About = () => {
  return (
    <div className="mb-28">
      <div>
        <PageName icon="about" title="ABOUT" size={24} />
        <div className="mt-12">
          <h1 className="text-[78px] font-light leading-[80px]">
            Every great design begin with an even{" "}
            <span className="text-primary">better story</span>
          </h1>
          <h2 className="text-secondary max-w-lg my-10">
            Since beginning my journey as a freelance designer nearly 8 years
            ago, I've done remote work for agencies, consulted for startups, and
            collaborated with talented people to create digital products for
            both business and consumer use. I'm quietly confident, naturally
            curious, and perpetually working on improving my chopsone design
            problem at a time.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
