import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import Stack from "@mui/joy/Stack";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { addSkill } from "../../../api";

interface IProps {
  open: boolean;
  setOpen: (status: boolean) => void;
}

const AddSkill: React.FC<IProps> = ({ open, setOpen }) => {
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(addSkill, {
    onSuccess() {
      setOpen(false);
      queryClient.invalidateQueries("getSkills");
    },
  });

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <ModalDialog>
        <DialogTitle>Yetenek Ekle</DialogTitle>
        <form
          onSubmit={handleSubmit((skillData: any) => {
            mutate(skillData);
          })}
        >
          <Stack spacing={2}>
            <FormControl>
              <FormLabel>Adı</FormLabel>
              <Input autoFocus {...register("name")} />
            </FormControl>
            <FormControl>
              <FormLabel>Icon</FormLabel>
              <Input {...register("icon")} />
            </FormControl>
            <div className="flex gap-2 w-full">
              <Button className="flex-grow" type="submit">
                Kaydet
              </Button>
              <Button
                className="flex-grow"
                type="button"
                color="warning"
                onClick={() => setOpen(false)}
              >
                İptal
              </Button>
            </div>
          </Stack>
        </form>
      </ModalDialog>
    </Modal>
  );
};

export default AddSkill;
