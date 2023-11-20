import { useQuery } from "react-query";
import { getPublicUser, getSocialMedias } from "../api";
import { API_URL } from "../config";
import GridBox from "../components/grid-box";
import Icon from "../icons";
import { Link } from "react-router-dom";

const Credential = () => {
  const { data: userData, isLoading: userLoading } = useQuery(
    "fetch/getPublicUser",
    getPublicUser
  );
  const { data: mediaList, isLoading: mediaLoading } = useQuery(
    "getSocialMedias",
    getSocialMedias
  );

  if (userLoading || mediaLoading) {
    return <div>Loading...</div>;
  }
  console.log(mediaList);
  return (
    <div className="">
      <div className="grid grid-cols-3 text-white gap-4">
        <GridBox isBottomIcon={false}>
          <div className="p-7">
            <div>
              <img
                src={`${API_URL}${userData?.resim}`}
                alt=""
                className="rounded-3xl"
              />
            </div>
            <div className="text-center mt-[34px]">
              <h1>{userData.ad_soyad}</h1>
              <h2>{userData.mail}</h2>
            </div>
            <ul className="flex items-center mt-[34px] justify-around">
              {mediaList.map((item: any) => (
                <li key={item.id}>
                  <a href={item.url} className="hover:bg-white" target="_blank">
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
        </GridBox>
        <div className="col-span-2">sağ</div>
      </div>
    </div>
  );
};

export default Credential;
