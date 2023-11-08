import "react-modern-drawer/dist/index.css";
import GridBox from "./components/grid-box";
import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

import { useQuery } from "react-query";
import { getPublicUser, getSkills, getSocialMedias } from "./api";
import { API_URL } from "./config";
import Icon from "./icons";

function App() {
  const { data, isLoading } = useQuery("fetch/getPublicUser", getPublicUser);
  const { isLoading: skillLoading, data: skillData } = useQuery(
    "getSkills",
    getSkills
  ); // backendden tek bir route'dan gelecek sekilde ayarlanacak

  const { data: mediaList, isLoading: mediaLoading } = useQuery(
    "getSocialMedias",
    getSocialMedias
  );

  if (isLoading) {
    <div className="text-white">Yükleniyor</div>;
  }
  if (skillLoading) {
    <div className="text-white">Yükleniyor</div>;
  }
  if (mediaLoading) {
    <div className="text-white">Yükleniyor</div>;
  }
  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <div className="h-full">
          <Zoom className="h-full">
            <Link to="/about">
              <GridBox>
                <div className="px-[50px] py-[46px] h-full flex gap-x-6">
                  <div>
                    <img
                      src={`${API_URL}${data?.resim}`}
                      alt={data?.ad_soyad}
                      width={300}
                      className="rounded-tl-3xl rounded-br-3xl"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-y-3">
                    <h4 className="text-secondary uppercase text-lg font-semibold">
                      {data?.unvan}
                    </h4>
                    <h2 className="text-white text-4xl font-semibold">
                      {data?.ad_soyad}
                    </h2>
                    <p className="text-secondary text-md">
                      I am a Web developer based in {data?.adres}.
                    </p>
                  </div>
                </div>
              </GridBox>
            </Link>
          </Zoom>
        </div>
        <div className="flex flex-col gap-y-2">
          <div>
            <Zoom>
              <GridBox isBottomIcon={false}>
                <div className="uppercase text-white text-center py-2">
                  Latest work and featured
                </div>
              </GridBox>
            </Zoom>
          </div>
          <div className="grid grid-cols-2 gap-3 h-full">
            <Zoom>
              <GridBox>
                <div className="p-4">
                  <img
                    src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/sign.png"
                    alt="signature"
                    className="mb-4"
                  />
                  <h2 className="uppercase text-secondary">more about me</h2>
                  <h2 className="text-white">Credentials</h2>
                </div>
              </GridBox>
              <GridBox>
                <div className="p-6">
                  <div className="mb-2">
                    <img
                      src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/my-works.png"
                      alt=""
                    />
                  </div>
                  <h2 className="uppercase text-secondary">showcase</h2>
                  <h2 className="text-white">Projects</h2>
                </div>
              </GridBox>
            </Zoom>
          </div>
        </div>
      </div>

      {/* 2.row */}
      <div className="grid grid-cols-2 gap-4 text-white mt-4 h-full">
        <div className="col-span-1">
          <Zoom>
            <GridBox>
              <div className="p-6">
                <ul className="grid grid-cols-4 gap-4 mb-2">
                  {skillData?.map((item: any) => {
                    return (
                      <div
                        key={item.id}
                        className="flex flex-col items-center justify-center"
                      >
                        <li className="text-base text-center">{item.name}</li>
                        <Icon name={item.icon} className="fill-white mt-2" />
                      </div>
                    );
                  })}
                </ul>
                <h2 className="uppercase text-secondary mb-2">skills</h2>
                <h2 className="text-white">My Talents</h2>
              </div>
            </GridBox>
          </Zoom>
        </div>

        <div className="col-span-1">
          <Zoom className="!h-full">
            <GridBox>
              <div className="p-6 h-full">
                <ul className="grid grid-cols-4 gap-4 mb-2">
                  {mediaList?.map((item: any) => (
                    <div
                      key={item.id}
                      className="flex flex-col items-center justify-center"
                    >
                      <li className="text-base text-center">
                        {item.social_media_name}
                      </li>
                      <a href={item.url} target="_blank">
                        <Icon
                          name={item.icon}
                          size={24}
                          className="fill-white mt-2 hover:scale-125 duration-200 transition-all"
                        />
                      </a>
                    </div>
                  ))}
                </ul>
                <h2 className="uppercase text-secondary mb-2 text-center">
                  links
                </h2>
                <h2 className="text-white text-center">Social Media</h2>
              </div>
            </GridBox>
          </Zoom>
        </div>
      </div>

      {/* 3.row */}
      <div className="grid grid-cols-2 gap-x-4 mt-4">
        <div>
          <Zoom>
            <GridBox isBottomIcon={false}>
              <div className="grid grid-cols-2">
                <div className="p-6">
                  <GridBox isBottomIcon={false}>
                    <div className="px-[50px] py-[46px]">
                      <h2 className="text-4xl text-white text-center">+3</h2>
                      <h1 className="text-center mt-4 uppercase text-secondary text-xs">
                        Years Experiences
                      </h1>
                    </div>
                  </GridBox>
                </div>

                <div className="p-6">
                  <GridBox isBottomIcon={false}>
                    <div className="px-[50px] py-[46px]">
                      <h2 className="text-4xl text-white text-center">+15</h2>
                      <h1 className="text-center mt-4 uppercase text-secondary text-xs">
                        Total Projects
                      </h1>
                    </div>
                  </GridBox>
                </div>
              </div>
            </GridBox>
          </Zoom>
        </div>
        <div className="flex flex-col gap-y-2 h-full">
          <Zoom className="h-full">
            <div className="h-full">
              <GridBox>
                <div className="px-[20px] py-[46px]">
                  <div className="text-5xl font-semibold flex flex-col justify-end h-full text-white">
                    <h1>Let's</h1>
                    <h2>
                      work <span className="text-secondary">together</span>
                    </h2>
                  </div>
                </div>
              </GridBox>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
}

export default App;
