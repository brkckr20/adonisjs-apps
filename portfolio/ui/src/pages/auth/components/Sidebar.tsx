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
              <Button variant="soft" fullWidth onClick={() => git("")}>
                Arayüz
              </Button>
            </li>
            <li className="mt-2">
              <Button variant="soft" fullWidth onClick={() => git("admin")}>
                Ana Sayfa
              </Button>
            </li>
            <li className="mt-2">
              <Button
                variant="soft"
                fullWidth
                onClick={() => git("admin/kullanici-ekle")}
              >
                Kullanıcı Ekle
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
