import { Button } from "@mui/joy";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const git = (adres: string) => {
    navigate(`/${adres}`);
  };
  return (
    <div className="border-r h-full border-gray-600">
      <div className="p-4">
        <h1 className="text-white text-3xl text-center">Burak Çakır</h1>
        <div>
          <ul>
            <li className="mt-3">
              <a
                href="/"
                className="!bg-indigo-500 !text-white !w-full px-[5px] py-[6px] block text-center rounded-lg hover:bg-indigo-600"
                target="_blank"
              >
                Arayüz
              </a>
            </li>
            <li className="mt-2">
              <Button
                variant="soft"
                className="!bg-indigo-500 !text-white"
                fullWidth
                onClick={() => git("admin")}
              >
                Ana Sayfa
              </Button>
            </li>
            <li className="mt-2">
              <Button
                variant="soft"
                className="!bg-indigo-500 !text-white"
                fullWidth
                onClick={() => git("admin/yetenekler")}
              >
                Yetenekler
              </Button>
            </li>
            <li className="mt-2">
              <Button
                variant="soft"
                className="!bg-indigo-500 !text-white"
                fullWidth
                onClick={() => git("admin/is-ve-egitim")}
              >
                İş ve Eğitim
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
