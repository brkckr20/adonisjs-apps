import { useQuery } from "react-query";
import axios from "axios";
import { API_URL } from "../../config";
import { SocialMedia } from "../social-media-list";
import Button from "../button";

export const ProfileCard = () => {
  const { isLoading, data } = useQuery("userInfo", () =>
    axios.get(`${API_URL}/user`).then((response) => {
      return response.data;
    })
  );

  if (isLoading) {
    return "loading";
  }

  return (
    <div className="h-full flex flex-col items-center justify-center shrink-0 fixed">
      <div className="px-10 py-12 border-[.5px] border-gray-600 rounded-3xl">
        <div className="flex items-start justify-between gap-8 mb-8">
          <div>
            <h1 className="text-4xl font-semibold">{data?.user.ad_soyad}</h1>
          </div>
          <div className="text-right text-sm">
            <h1>{data?.user.unvan}</h1>
          </div>
        </div>
        <div>
          <img
            src={`${API_URL}${data?.user.resim}`}
            alt=""
            width={300}
            height={250}
            className="rounded-3xl"
          />
          <div className="mt-14 text-center flex flex-col gap-2">
            <h1 className="text-lg">{`${data?.user.mail}`}</h1>
            <h2 className="text-md">{`${data?.user.adres}`}</h2>
            <h2 className="text-gray-400 text-sm">
              © 2022 Drake. All Rights Reserved
            </h2>
          </div>
          <div className="flex justify-center gap-4 my-6">
            {data.socialMediaList.map((item: any) => (
              <SocialMedia key={item.id} url={item.url} iconName={item.icon} />
            ))}
          </div>
          <div>
            <Button isIcon={true} />
          </div>
        </div>
      </div>
    </div>
  );
};
