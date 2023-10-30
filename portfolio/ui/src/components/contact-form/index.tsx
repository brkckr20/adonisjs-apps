import GridBox from "../grid-box";
import Input from "./Input";
import Textarea from "./Textarea";

const ContactForm = () => {
  return (
    <div className="text-white">
      <GridBox isBottomIcon={false}>
        <div className="p-10 w-full">
          <h1 className="text-5xl">
            Contact <span className="text-secondary font-bold">Me!</span>
          </h1>
          <form action="" className="flex flex-col gap-4 mt-4">
            <Input placeHolder="Name *" />
            <Input placeHolder="Email *" />
            <Input placeHolder="Your Subject *" />
            <Textarea placeHolder="Your Message *" />
            <button
              className="p-4 bg-gradient-to-r from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.1)] rounded-lg"
              type="submit"
            >
              Send message
            </button>
          </form>
        </div>
      </GridBox>
    </div>
  );
};

export default ContactForm;
