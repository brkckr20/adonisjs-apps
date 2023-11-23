import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getOneJobAndEdu } from "../../api";
import { Input, FormControl, FormLabel, Textarea, Button } from "@mui/joy";

const EditJobAndEdu = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery("getJobAndEduById", () =>
    getOneJobAndEdu(id)
  );

  console.log(data);
  if (isLoading) {
    return <div className="text-white p-2">Yükleniyor...</div>;
  }

  return (
    <div className="p-2">
      <form action="" className="">
        <div className="grid grid-cols-4 gap-4">
          <FormControl>
            <FormLabel className="!text-white">İsim :</FormLabel>
            <Input placeholder="data" defaultValue={data?.info.name} />
          </FormControl>
          <FormControl>
            <FormLabel className="!text-white">Yer :</FormLabel>
            <Input placeholder="data" defaultValue={data?.info.place} />
          </FormControl>
          <FormControl>
            <FormLabel className="!text-white">Tip :</FormLabel>
            <Input placeholder="data" defaultValue={data?.info.type} />
          </FormControl>
          <FormControl>
            <FormLabel className="!text-white">Başlangıç Ayı :</FormLabel>
            <Input placeholder="data" defaultValue={data?.extra.startedMonth} />
          </FormControl>
          <FormControl>
            <FormLabel className="!text-white">Başlangıç Yılı :</FormLabel>
            <Input placeholder="data" defaultValue={data?.extra.startedYear} />
          </FormControl>
          <FormControl>
            <FormLabel className="!text-white">Başlangıç Ayı :</FormLabel>
            <Input placeholder="data" defaultValue={data?.extra.endMonth} />
          </FormControl>
          <FormControl>
            <FormLabel className="!text-white">Başlangıç Yılı :</FormLabel>
            <Input placeholder="data" defaultValue={data?.extra.endYear} />
          </FormControl>
          <div></div>
        </div>
        <div className="mb-4">
          <FormLabel className="!text-white">Açıklama :</FormLabel>
          <Textarea className="h-28" defaultValue={data?.extra.endYear} />
        </div>
        <FormControl>
          <Button>Güncelle!</Button>
        </FormControl>
      </form>
    </div>
  );
};

export default EditJobAndEdu;
