"use client";

import Button from "./bilesenler/Button";
import Icon from "./icons";

const icons = [
  {
    name: "instagram",
    size: 24,
  },
  {
    name: "twitter",
    size: 20,
  },
  {
    name: "github",
    size: 26,
  },
  {
    name: "facebook",
    size: 24,
  },
];

const ProfileCard = ({ item: data }: any) => {
  return (
    <div className="p-10 h-full shrink-0">
      <div className="border border-white/50 rounded-3xl p-8">
        <div>
          <div className="flex justify-between items-center">
            <h1 className="w-full uppercase text-4xl ">
              {data?.user.ad_soyad}
            </h1>
            <h1 className="w-full text-start text-sm">{data?.user.unvan}</h1>
          </div>
          <div className="mt-8">
            <img
              src={"http://127.0.0.1:3333" + data?.user.resim}
              alt="resim"
              className="rounded-2xl grayscale-[60%]"
            />
          </div>
          <div className="text-center">
            <h2 className="text-xl mt-8 mb-4">{data?.user.mail}</h2>
            <h2 className="text-md">{data?.user.adres}</h2>
            <h3 className="my-4 text-secondary">© 2020. All Rights Reserved</h3>
          </div>
          <div className="flex items-center justify-center gap-x-8 my-8">
            {data?.socialMediaList.map((item: any, i: number) => (
              <div
                key={i}
                className="w-14 h-14 flex items-center justify-center group rounded-full border-[2px] border-secondary cursor-pointer hover:border-primary duration-150 ease-in-out"
              >
                <Icon name={"instagram"} />
                {/* <Icon
                  name={icon.icon}
                  //size={icon.size}
                  size={24}
                  fill="#999999"
                  className="group-hover:text-white"
                /> */}
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Button btnText="hire me !" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
