import { Table, Button } from "@mui/joy";
import AddSkill from "./components/AddSkill";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getSkills, deleteSkill } from "../../api";

const Skills = () => {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const mutation = useMutation(deleteSkill, {
    onSuccess() {
      queryClient.invalidateQueries("getSkills");
    },
  });
  const { isLoading, data } = useQuery("getSkills", getSkills);

  if (isLoading) {
    return <div className="text-white">Yükleniyor</div>;
  }

  const handleDelete = (id: number) => {
    mutation.mutate(id);
  };

  return (
    <div className="p-2 text-white">
      <div className="text-end mb-2">
        <Button variant="solid" color="success" onClick={() => setOpen(true)}>
          Yeni
        </Button>
      </div>
      <AddSkill open={open} setOpen={setOpen} />
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
              <th>Yetenek Adı</th>
              <th>Icon</th>
              <th className="flex items-center w-full justify-center">İşlem</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {data.map((item: any) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.icon}</td>
                  <td className="text-center">
                    <Button
                      size="sm"
                      color="danger"
                      variant="plain"
                      onClick={() => handleDelete(item.id)}
                    >
                      Sil
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Skills;
