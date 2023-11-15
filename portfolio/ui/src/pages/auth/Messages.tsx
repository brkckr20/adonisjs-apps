import { Button, Table } from "@mui/joy";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getMessages, updateMessage } from "../../api";

const Messages = () => {
  const { isLoading, data } = useQuery("getMessages", getMessages);
  const queryClient = useQueryClient();
  const { mutate: updateMessageMutate } = useMutation(updateMessage, {
    onSuccess() {
      queryClient.invalidateQueries("getMessage");
    },
  });

  if (isLoading) {
    return <div className="text-white p-2">Yükleniyor..</div>;
  }

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
                <td>{formatISODateToCustomFormat(item.created_at)}</td>
                <td>{item.isReplied === "evet" ? "Evet" : "Hayır"}</td>
                <td className="text-center">
                  <Button
                    size="sm"
                    onClick={() => updateMessageMutate(item.id)}
                    color="success"
                    variant="solid"
                  >
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

function formatISODateToCustomFormat(isoDate: any) {
  const parts = isoDate.split("T")[0].split("-");
  const formattedDate = `${parts[2]}.${parts[1]}.${parts[0]}`;
  return formattedDate;
}
