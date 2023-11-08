import { Button, Table } from "@mui/joy";
import AddJobAndEdu from "./components/AddJobAndEdu";
import { useState } from "react";
import { useQuery } from "react-query";
import { getJobAndEdu } from "../../api";

const JobAndEdu = () => {
  const [open, setOpen] = useState<boolean>(false);

  const { isLoading, data } = useQuery("getJobAndEdu", getJobAndEdu);

  if (isLoading) {
    return <div className="text-white p-2">Yükleniyor..</div>;
  }

  return (
    <div className="p-2">
      <div className="text-end mb-2">
        <Button variant="solid" color="success" onClick={() => setOpen(true)}>
          Yeni
        </Button>
      </div>
      <AddJobAndEdu open={open} setOpen={setOpen} />
      <div>
        <Table
          aria-label="basic table"
          borderAxis="xBetween"
          color="neutral"
          size="sm"
          variant="plain"
        >
          <thead className="text-center">
            <tr>
              <th>Tip</th>
              <th>İsim</th>
              <th>Yer / Mekan</th>
              <th>Başlangıç Ayı</th>
              <th>Başlangıç Yılı</th>
              <th>Bitiş Ayı</th>
              <th>Bitiş Yılı</th>
              <th className="flex items-center w-full justify-center">İşlem</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {data.map((item: any, i: number) => (
              <tr key={i}>
                <td>{item.info.type}</td>
                <td>{item.info.name}</td>
                <td>{item.info.place}</td>
                <td>{item.extra.startedMonth}</td>
                <td>{item.extra.startedYear}</td>
                <td>{item.extra.endMonth}</td>
                <td>{item.extra.endYear}</td>
                <td className="text-center">
                  <Button size="sm" color="danger" variant="plain">
                    Sil
                  </Button>
                  <Button size="sm" color="success" variant="solid">
                    Gncll
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default JobAndEdu;
