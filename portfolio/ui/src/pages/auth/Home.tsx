import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Modal,
  ModalDialog,
} from "@mui/joy";
import { useQuery, useMutation } from "react-query";
import { fetchUserInfo } from "../../api";
import { useForm } from "react-hook-form";
import { updateUser } from "../../api";
import { Fragment, useState } from "react";

const Home = () => {
  const { register, handleSubmit } = useForm();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const { mutate } = useMutation(updateUser, {
    onSuccess(data) {
      setMessage(data.message);
      handleOpenModal();
    },
  });

  const { isLoading, data, isError, error } = useQuery(
    "getUserData",
    fetchUserInfo
  );
  if (isLoading) {
    return <div className="text-white">Yükleniyor</div>;
  }

  if (isError) {
    console.log(error);
  }

  return (
    <Fragment>
      <Modal open={open} onClose={handleCloseModal}>
        <ModalDialog color="success">
          {/* <ModalClose variant="plain" onClick={handleCloseModal} /> */}
          <h1>{message}</h1>
        </ModalDialog>
      </Modal>
      <div className="text-white p-2">
        <div>
          <form
            action=""
            onSubmit={handleSubmit((userData) => {
              mutate(userData);
            })}
          >
            <div className="grid grid-cols-3 gap-4">
              <FormControl>
                <FormLabel className="!text-white">İsim & Soyisim</FormLabel>
                <Input
                  placeholder="İsim soyisim giriniz"
                  {...register("ad_soyad")}
                  defaultValue={data.ad_soyad}
                />
              </FormControl>
              <FormControl>
                <FormLabel className="!text-white">Ünvan</FormLabel>
                <Input
                  placeholder="Ünvan giriniz"
                  {...register("unvan")}
                  defaultValue={data.unvan}
                />
              </FormControl>
              <FormControl>
                <FormLabel className="!text-white">Ülke / Şehir</FormLabel>
                <Input
                  placeholder="Ülke ve şehir giriniz"
                  {...register("adres")}
                  defaultValue={data.adres}
                />
              </FormControl>
              <FormControl>
                <FormLabel className="!text-white">Mail Adresi</FormLabel>
                <Input
                  placeholder="Mail adresinizi giriniz"
                  {...register("mail")}
                  defaultValue={data.mail}
                />
              </FormControl>
              <FormControl>
                <FormLabel className="!text-white">Mail Adresi 2</FormLabel>
                <Input
                  placeholder="2. Mail adresinizi giriniz"
                  {...register("mail2")}
                  defaultValue={data.mail2}
                />
              </FormControl>
              <FormControl>
                <FormLabel className="!text-white">Telefon</FormLabel>
                <Input
                  placeholder="Telefon numaranızı giriniz"
                  {...register("telefon")}
                  defaultValue={data.telefon}
                />
              </FormControl>
            </div>
            <Button
              type="submit"
              color="success"
              loading={isLoading}
              className="!mt-2"
            >
              Kaydet
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
