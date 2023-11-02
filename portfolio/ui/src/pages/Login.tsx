import { FormEvent, useEffect, useState } from "react";
import GridBox from "../components/grid-box";
import Button from "@mui/joy/Button";
import Alert from "@mui/joy/Alert";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { loginUser } from "../redux/auth/services";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();

  const auth = useSelector((state: RootState) => state.auth);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
  };

  return (
    <div className="w-full h-full">
      <div className="max-w-3xl mx-auto">
        <GridBox isBottomIcon={false}>
          <h2 className="p-4 text-white mb-2 text-2xl text-center">
            Kullanıcı bilgileri giriş ekranı
          </h2>
          <div className="px-10">
            {auth.isError ? (
              <Alert variant="solid" color="danger">
                {auth.errorMessage}
              </Alert>
            ) : (
              <div></div>
            )}
          </div>
          <form onSubmit={handleLogin} className="p-10">
            <input
              className={`w-full p-3 rounded-lg bg-transparent bg-gradient-to-r from-black/10 to-black/20 outline-none text-white mb-2`}
              placeholder={"Kullanıcı adı"}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className={`w-full p-3 rounded-lg bg-transparent bg-gradient-to-r from-black/10 to-black/20 outline-none text-white mb-2`}
              placeholder={"Şifre"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" className="!w-full">
              Login
            </Button>
          </form>
        </GridBox>
      </div>
    </div>
  );
};

export default Login;
