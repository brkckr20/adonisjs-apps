import { useQuery } from "react-query";
import { getPublicUser } from "../api";
import { API_URL } from "../config";
import GridBox from "../components/grid-box";

const Credential = () => {
  const { data: userData, isLoading: userLoading } = useQuery(
    "fetch/getPublicUser",
    getPublicUser
  );

  if (userLoading) {
    return <div>Loading...</div>;
  }
  console.log(userData);
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
            <div>
              <h1>{userData.ad_soyad}</h1>
              <h2>{userData.mail}</h2>
            </div>
            {/* <ul></ul> sosyal media linkleri gelicek */}
          </div>
        </GridBox>
        <div className="col-span-2">sağ</div>
      </div>
    </div>
  );
};

export default Credential;
