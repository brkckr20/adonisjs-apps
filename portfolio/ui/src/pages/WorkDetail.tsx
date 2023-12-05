import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getWork } from "../api";
import { API_URL } from "../config";
import GridBox from "../components/grid-box";
const WorkDetail = () => {
  const { slug } = useParams();
  const { isLoading, data } = useQuery("getWork", () => getWork(slug));
  if (isLoading) {
    return <div className="text-white">Loading</div>;
  }
  console.log(data);

  return (
    <div className="text-white">
      <div>
        <h1 className="uppercase text-6xl font-medium">{data.title}</h1>
      </div>
      <div className="h-[600px] overflow-hidden mt-10">
        <img
          className="w-full rounded-lg"
          src={`${API_URL}/uploads/work/${data.image1}`}
          alt="image"
        />
      </div>
      <div className="mt-10">
        <GridBox isBottomIcon={false}>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <GridBox isBottomIcon={false}>
                <div className="p-6">
                  <h1 className="text-forty text-lg uppercase mb-2">
                    {data.title}
                  </h1>
                  <p>
                    Sit amet luctussd fav venenatis, lectus magna fringilla inis
                    urna, porttitor rhoncus dolor purus non enim praesent in
                    elementum sahas facilisis leo, vel fringilla est ullamcorper
                    eget nulla facilisi etisam dignissim diam quis enim lobortis
                    viverra orci sagittis eu volutpat odio facilisis mauris sit.
                    Scelerisque fermentum duisi faucibus in ornare quam sisd sit
                    amet luctussd fav venenatis, lectus magna fringilla zac
                    urna, porttitor rhoncus dolor purus non enim praesent cuz
                    elementum sahas facilisis leot.
                  </p>
                </div>
              </GridBox>
              <GridBox isBottomIcon={false}>
                <div className="p-6 flex w-full items-center justify-center h-full">
                  <h1 className="text-7xl">2022</h1>
                </div>
              </GridBox>
            </div>
          </div>
        </GridBox>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-10">
        <div>
          <img
            className="w-full rounded-lg"
            src={`${API_URL}/uploads/work/${data.image1}`}
            alt="image"
          />
        </div>
        <div>
          <img
            className="w-full rounded-lg"
            src={`${API_URL}/uploads/work/${data.image2}`}
            alt="image"
          />
        </div>
        <div>
          <img
            className="w-full rounded-lg"
            src={`${API_URL}/uploads/work/${data.image3}`}
            alt="image"
          />
        </div>
        <div>
          <img
            className="w-full rounded-lg"
            src={`${API_URL}/uploads/work/${data.image4}`}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkDetail;
