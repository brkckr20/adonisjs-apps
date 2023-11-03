import { Typography, Box, Skeleton } from "@mui/joy";
import { useQuery } from "react-query";
import { fetchUserInfo } from "../../api";
import { API_URL } from "../../config";
import { logout } from "../../redux/auth/authSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

const AddUser = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, isError, error } = useQuery(
    "userInfo",
    fetchUserInfo
  );
  if (isLoading) {
    return <div>Loading!</div>;
  }

  if (isError) {
    dispatch(logout());
  }

  return (
    <div className="p-2 text-white">
      <Typography level="h3" textColor="common.white" marginBottom={2}>
        Kullanıcı Ekle (Ekleme formu ihtiyaca binaen eklenecek)
      </Typography>
      <Skeleton loading={isLoading} variant="overlay" width={500} height={450}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <Box width={500} border={1} borderColor="white" padding={2}>
            <Typography level="h4" textColor="common.white">
              Ad Soyad
            </Typography>
            <span>{data.ad_soyad}</span>
            <Typography level="h4" textColor="common.white">
              E-Mail
            </Typography>
            <span>{data.mail}</span>
            <Typography level="h4" textColor="common.white">
              E-Mail
            </Typography>
            <img src={API_URL + data.resim} alt="lorem" width={250} />
            <Typography level="h4" textColor="common.white">
              Unvan
            </Typography>
            <span>{data.unvan}</span>
          </Box>
        )}
      </Skeleton>
    </div>
  );
};

export default AddUser;
