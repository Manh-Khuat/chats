import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import LeftSideBar from "../../components/layouts/LeftSideBar";
import MenuBar from "./layout/MenuBar";

const sidebarWith = 250;

export default function ChatModule() {
  const moduleId = 'chat'

  return (
    <Box sx={{ display: 'flex' }}>
      <LeftSideBar sidebarWith={sidebarWith} moduleId={moduleId} >
        <MenuBar />
      </LeftSideBar>

      <Box className="module-container" >
        <Outlet />
      </Box>
    </Box>
  )
}