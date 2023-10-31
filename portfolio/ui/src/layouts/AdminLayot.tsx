import { Outlet } from "react-router-dom";
import Sidebar from "../pages/auth/components/Sidebar";
import { Grid } from "@mui/joy";

const AdminLayot = () => {
  return (
    <Grid container height="100%" borderRight="2px" borderColor="gray">
      <Grid xs={2}>
        <Sidebar />
      </Grid>
      <Grid xs={10}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default AdminLayot;
