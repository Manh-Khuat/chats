import { Box, Toolbar } from "@mui/material";
import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderBar from "./header-bar/HeaderBar";

const sidebarWith = 250;

export const ModuleLayoutContext = createContext()

export default function LayoutModule() {
  const [activeModule, setActiveModule] = useState({ moduleId: null, childMenu: null })

  return (
    <ModuleLayoutContext.Provider value={{ activeModule, setActiveModule }}>
      <Box sx={{ display: 'flex' }}>
        <HeaderBar logoWidth={sidebarWith} />

        <Box sx={{ width: '100%' }}>
          <Toolbar />

          {/* Application Layout goes here */}
          <Outlet />
        </Box>
      </Box>
    </ModuleLayoutContext.Provider>
  )
}