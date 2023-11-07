import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import Stack from "@mui/joy/Stack";
import { SvgIcon, styled } from "@mui/joy";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { addSkill } from "../../../api";

interface IProps {
  open: boolean;
  setOpen: (status: boolean) => void;
}

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

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
            <FormControl>
              <FormLabel>Resim</FormLabel>
              <Button
                component="label"
                role={undefined}
                tabIndex={-1}
                variant="outlined"
                color="neutral"
                startDecorator={
                  <SvgIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                  </SvgIcon>
                }
              >
                Upload a file
                <VisuallyHiddenInput type="file" {...register("image")} />
              </Button>
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
