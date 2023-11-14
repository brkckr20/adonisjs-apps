import { Button, Table } from "@mui/joy";
import { useQuery } from "react-query";
import { getMessages } from "../../api";

const Messages = () => {
  const { isLoading, data } = useQuery("getMessages", getMessages);

  if (isLoading) {
    return <div className="text-white p-2">Yükleniyor..</div>;
  }
  console.log(data);
  return (
    <div className="p-2">
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
              <th>Name</th>
              <th>Email</th>
              <th>Başlık</th>
              <th>Mesaj</th>
              <th>Tarih</th>
              <th>Cevaplandı mı?</th>
              <th className="flex items-center w-full justify-center">İşlem</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {data.map((item: any, i: number) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.subject}</td>
                <td>{item.message}</td>
                <td>{item.date}</td>
                <td>{item.isReplied ? "evet" : "hayır"}</td>
                <td className="text-center">
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

export default Messages;
