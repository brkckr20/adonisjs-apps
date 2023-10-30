import { Slide } from "react-awesome-reveal";
import Icon from "../icons";
import ContactForm from "../components/contact-form";

const Contact = () => {
  return (
    <div className="h-full">
      <div className="text-white grid grid-cols-3 gap-12">
        <Slide direction="left" className="col-span-1">
          <div>
            <h1 className="mb-4">CONTACT INFO</h1>
            {/* items start */}
            <div className="flex gap-4 mb-12">
              <div className="relative">
                <div className="w-20 h-20">
                  <div className="bg-gradient-to-r from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.1)] h-full flex items-center justify-center rounded-xl">
                    <Icon name="letter" size={30} className="fill-white" />
                  </div>
                </div>
              </div>
              <div>
                <h5 className="text-gray-500">MAIL US</h5>
                <p>info@burak-cakir.com.tr</p>
                <p>burak2043@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-4 mb-12">
              <div className="relative">
                <div className="w-20 h-20">
                  <div className="bg-gradient-to-r from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.1)] h-full flex items-center justify-center rounded-xl">
                    <Icon name="letter" size={30} className="fill-white" />
                  </div>
                </div>
              </div>
              <div>
                <h5 className="text-gray-500">CONTACT US</h5>
                <p>+1 504-749-5456</p>
              </div>
            </div>
            <div className="flex gap-4 mb-12">
              <div className="relative">
                <div className="w-20 h-20">
                  <div className="bg-gradient-to-r from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.1)] h-full flex items-center justify-center rounded-xl">
                    <Icon name="letter" size={30} className="fill-white" />
                  </div>
                </div>
              </div>
              <div>
                <h5 className="text-gray-500">LOCATION</h5>
                <p>info@burak-cakir.com.tr</p>
                <p>burak2043@gmail.com</p>
              </div>
            </div>
            <div>
              <h1>SOCIAL INFO</h1>
              <>
                <ul className="flex w-full items-center justify-between mt-4">
                  <li className="group hover:bg-white duration-200 bg-gradient-to-r from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.1)] w-20 h-20 flex items-center justify-center rounded-2xl">
                    <Icon
                      name="instagram"
                      size={40}
                      className="fill-white group-hover:fill-black duration-200"
                    />
                  </li>
                  <li className="group hover:bg-white duration-200 bg-gradient-to-r from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.1)] w-20 h-20 flex items-center justify-center rounded-2xl">
                    <Icon
                      name="facebook"
                      size={40}
                      className="fill-white group-hover:fill-black duration-200"
                    />
                  </li>
                  <li className="group hover:bg-white duration-200 bg-gradient-to-r from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.1)] w-20 h-20 flex items-center justify-center rounded-2xl">
                    <Icon
                      name="twitter"
                      size={40}
                      className="fill-white group-hover:fill-black duration-200"
                    />
                  </li>
                  <li className="group hover:bg-white duration-200 bg-gradient-to-r from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.1)] w-20 h-20 flex items-center justify-center rounded-2xl">
                    <Icon
                      name="github"
                      size={40}
                      className="fill-white group-hover:fill-black duration-200"
                    />
                  </li>
                </ul>
              </>
            </div>
          </div>
        </Slide>
        <div className="col-span-2">
          <Slide direction="right" className="w-full">
            <ContactForm />
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Contact;
