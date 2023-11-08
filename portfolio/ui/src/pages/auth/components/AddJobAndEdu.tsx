import {
  Modal,
  ModalDialog,
  DialogTitle,
  Select,
  Option,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@mui/joy";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { addJobAndEdu } from "../../../api";

const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

interface IProps {
  open: boolean;
  setOpen: (status: boolean) => void;
}

const AddJobAndEdu: FC<IProps> = ({ open, setOpen }) => {
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(addJobAndEdu, {
    onSuccess() {
      setOpen(false);
      queryClient.invalidateQueries("getJobAndEdu");
    },
  });

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <ModalDialog>
        <DialogTitle>İş veya Yetenek Ekle</DialogTitle>
        <form
          onSubmit={handleSubmit((data) => {
            mutate(data);
          })}
        >
          <Stack spacing={2}>
            <FormControl>
              <FormLabel>Tip Seçiniz</FormLabel>
              <Select {...register("type")} placeholder="Tip">
                <Option value="is">İş</Option>
                <Option value="egitim">Eğitim</Option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>İsim</FormLabel>
              <Input {...register("name")} />
            </FormControl>
            <FormControl>
              <FormLabel>Yer / Mekan</FormLabel>
              <Input {...register("place")} />
            </FormControl>
            <FormControl>
              <FormLabel>Başlangıç Ayı</FormLabel>
              <Select {...register("startedMonth")} placeholder="Ay">
                {months.map((i) => (
                  <Option key={i} value={i}>
                    {i}
                  </Option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Başlangıç Yılı</FormLabel>
              <Input {...register("startedYear")} />
            </FormControl>
            <FormControl>
              <FormLabel>Bitiş Ayı</FormLabel>
              <Select {...register("endMonth")} placeholder="Ay">
                {months.map((i) => (
                  <Option key={i} value={i}>
                    {i}
                  </Option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Bitiş Yılı</FormLabel>
              <Input {...register("endYear")} />
            </FormControl>
          </Stack>
          <div className="flex gap-2 w-full mt-4">
            <Button className="flex-grow" type="submit">
              Kaydet
            </Button>
            <Button
              className="flex-grow"
              type="button"
              color="warning"
              // onClick={() => setOpen(false)}
            >
              İptal
            </Button>
          </div>
        </form>
      </ModalDialog>
    </Modal>
  );
};

export default AddJobAndEdu;
