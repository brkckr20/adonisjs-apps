import { useQuery } from "react-query";
import { getJobAndEdu, getPublicUser, getSocialMedias } from "../api";
import { API_URL } from "../config";
import GridBox from "../components/grid-box";
import Icon from "../icons";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

const Credential = () => {
  const { isLoading: jaeLoading, data: jaeData } = useQuery(
    "getJobAndEdu",
    getJobAndEdu
  );
  const { data: userData, isLoading: userLoading } = useQuery(
    "fetch/getPublicUser",
    getPublicUser
  );
  const { data: mediaList, isLoading: mediaLoading } = useQuery(
    "getSocialMedias",
    getSocialMedias
  );

  if (userLoading || mediaLoading || jaeLoading) {
    return <div>Loading...</div>;
  }

  console.log(jaeData);

  return (
    <div className="">
      <div className="grid grid-cols-3 text-white gap-12">
        <Slide direction="left">
          <GridBox isBottomIcon={false} height="h-max">
            <div className="h-max">
              <div className="p-7">
                <div>
                  <img
                    src={`${API_URL}${userData?.resim}`}
                    alt=""
                    className="rounded-3xl"
                  />
                </div>
                <div className="text-center mt-[30px]">
                  <h1>{userData.ad_soyad}</h1>
                  <h2>{userData.mail}</h2>
                </div>
                <ul className="flex items-center mt-[30px] justify-around">
                  {mediaList.map((item: any) => (
                    <li key={item.id}>
                      <a
                        href={item.url}
                        className="hover:bg-white"
                        target="_blank"
                      >
                        <Icon
                          name={item.icon}
                          size={32}
                          className="fill-white mt-2 hover:scale-150 duration-200 transition-all"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-[24px] text-white flex items-center justify-center py-2 font-semibold bg-secondary rounded-lg hover:bg-white hover:text-black duration-200"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </GridBox>
        </Slide>
        <div className="col-span-2">
          <Slide direction="right">
            <div>
              <h1 className="text-lg uppercase font-semibold mb-[37px]">
                About me
              </h1>
              <p className="mb-[30px] font-medium tracking-wide">
                I am a web developer who enjoys and is passionately committed to
                their work. Since graduating in 2020, I have been doing this job
                with great pleasure and learning new things every day by keeping
                myself updated with new knowledge. I love learning and
                researching.
              </p>
            </div>
            <div className="pt-[110px]">
              <h1 className="text-lg uppercase font-semibold mb-[22px]">
                experience
              </h1>
              {jaeData
                .filter((item: any) => {
                  return item.info.type === "is";
                })
                .map((i: any, index: number) => (
                  <div key={index} className="mb-6">
                    <h1 className="text-base mb-2 text-secondary font-medium">
                      {i.extra.startedYear} - {i.extra.endYear}
                    </h1>
                    <h2 className="text-lg mb-1 text-thirty font-medium">
                      {i.info.name}
                    </h2>
                    <h3 className="text-sm mb-1 text-secondary font-medium">
                      {i.info.place}
                    </h3>
                    <p>
                      Sit amet luctussd fav venenatis, lectus magna fringilla
                      inis urna, porttitor rhoncus dolor purus non enim praesent
                      in elementum sahas facilisis leo, vel fringilla est
                      ullamcorper eget nulla facilisi etisam dignissim diam quis
                      enim lobortis viverra orci sagittis eu volutpat odio
                      facilisis mauris sit.
                    </p>
                  </div>
                ))}
            </div>
            <div className="pt-[50px]">
              <h1 className="text-lg uppercase font-semibold mb-[22px]">
                education
              </h1>
              {jaeData
                .filter((item: any) => {
                  return item.info.type === "egitim";
                })
                .map((i: any, index: number) => (
                  <div key={index} className="mb-6">
                    <h1 className="text-base mb-2 text-secondary font-medium">
                      {i.extra.startedYear} - {i.extra.endYear}
                    </h1>
                    <h2 className="text-lg mb-1 text-thirty font-medium">
                      {i.info.name}
                    </h2>
                    <h3 className="text-sm mb-1 text-secondary font-medium">
                      {i.info.place}
                    </h3>
                    <p>
                      Sit amet luctussd fav venenatis, lectus magna fringilla
                      inis urna, porttitor rhoncus dolor purus non enim praesent
                      in elementum sahas facilisis leo, vel fringilla est
                      ullamcorper eget nulla facilisi etisam dignissim diam quis
                      enim lobortis viverra orci sagittis eu volutpat odio
                      facilisis mauris sit.
                    </p>
                  </div>
                ))}
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Credential;
