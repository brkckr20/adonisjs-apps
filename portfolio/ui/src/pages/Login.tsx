import Input from "../components/contact-form/Input";
import GridBox from "../components/grid-box";
import Button from "@mui/joy/Button";

const Login = () => {
  return (
    <div className="w-full h-full">
      <div className="max-w-3xl mx-auto">
        <GridBox isBottomIcon={false}>
          <h2 className="p-4 text-white mb-2 text-2xl text-center">
            Kullanıcı bilgileri giriş ekranı
          </h2>
          <form action="" className="p-10">
            <Input
              placeHolder="Kulanıcı adınızı giriniz"
              className="text-white mx-2"
            />
            <Input
              placeHolder="Şifrenizi giriniz!"
              className="text-white mt-2 mx-2 mb-5"
            />
            <Button className="!w-full">Login</Button>
          </form>
        </GridBox>
      </div>
    </div>
  );
};

export default Login;
