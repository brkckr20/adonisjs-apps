import { Slide } from "react-awesome-reveal";
import Icon from "../icons";
import ContactForm from "../components/contact-form";
import { useQuery } from "react-query";
import { fetchUserInfo, getSocialMedias } from "../api";
const Contact = () => {
  const { isLoading, data } = useQuery("getUserData", fetchUserInfo);
  const { data: mediaList, isLoading: mediaLoading } = useQuery(
    "getSocialMedias",
    getSocialMedias
  );

  if (isLoading) {
    return <div className="">Loading...</div>;
  }
  if (mediaLoading) {
    return <div className="">Loading...</div>;
  }

  return (
    <div className="h-full">
      <div className="text-white grid grid-cols-3 gap-12">
        <Slide direction="left" className="col-span-1 h-full">
          <div className="h-full">
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
                <p>
                  <a href={`mailto:${data?.mail}`}>{data?.mail}</a>
                </p>
                <p>
                  {" "}
                  <a href={`mailto:${data?.mail2}`}>{data?.mail2}</a>
                </p>
              </div>
            </div>
            <div className="flex gap-4 mb-12">
              <div className="relative">
                <div className="w-20 h-20">
                  <div className="bg-gradient-to-r from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.1)] h-full flex items-center justify-center rounded-xl">
                    <Icon name="phone" size={30} className="fill-white" />
                  </div>
                </div>
              </div>
              <div>
                <h5 className="text-gray-500">CONTACT US</h5>
                <p>{data?.telefon}</p>
              </div>
            </div>
            <div className="flex gap-4 mb-12">
              <div className="relative">
                <div className="w-20 h-20">
                  <div className="bg-gradient-to-r from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.1)] h-full flex items-center justify-center rounded-xl">
                    <Icon name="location" size={30} className="fill-white" />
                  </div>
                </div>
              </div>
              <div>
                <h5 className="text-gray-500">LOCATION</h5>
                <p>{data?.adres.split("/")[1]}</p>
                <p>{data?.adres.split("/")[0]}</p>
              </div>
            </div>
            <div className="">
              <h1>SOCIAL INFO</h1>
              <>
                <ul className="flex w-full items-center justify-between mt-4">
                  {mediaList.map((item: any) => (
                    <a href={item?.url} key={item.id} target="_blank">
                      <li className="group hover:bg-white duration-200 bg-gradient-to-r from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.1)] w-20 h-20 flex items-center justify-center rounded-2xl">
                        <Icon
                          name={item?.icon}
                          size={40}
                          className="fill-white group-hover:fill-black duration-200"
                        />
                      </li>
                    </a>
                  ))}
                </ul>
              </>
            </div>
          </div>
        </Slide>
        <div className="col-span-2 h-full">
          <Slide direction="right" className="w-full">
            <ContactForm />
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Contact;
