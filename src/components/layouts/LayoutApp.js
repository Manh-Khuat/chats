import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import LeftSideBar from "./LeftSideBar";

const sidebarWith = 250;

export default function LayoutApp() {
  return (
    <Box sx={{ display: 'flex' }}>
      <LeftSideBar sidebarWith={sidebarWith} />

      <Box className="module-container" >
        <Outlet />
      </Box>
    </Box>
  )
}