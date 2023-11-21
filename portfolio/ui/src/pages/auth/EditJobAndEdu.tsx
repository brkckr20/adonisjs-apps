import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getOneJobAndEdu } from "../../api";

const EditJobAndEdu = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery("getJobAndEduById", () =>
    getOneJobAndEdu(id)
  );
  if (isLoading) {
    return <div className="text-white p-2">Yükleniyor..</div>;
  }

  console.log(data);
  return <div className="p-2">EditJobAndEdu</div>;
};

export default EditJobAndEdu;

/* devam edilecek */
