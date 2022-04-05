import { Drawer, Toolbar } from '@mui/material';
import { useContext, useEffect } from 'react';
import { ModuleLayoutContext } from './LayoutModule'

export default function LeftSideBar({ sidebarWith, moduleId, children }) {
  const { setActiveModule } = useContext(ModuleLayoutContext)

  useEffect(() => {
    setActiveModule({ moduleId, childMenu: children })

    return () => {
      setActiveModule({ moduleId, childMenu: null })
    }
  }, [])

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', md: 'flex' },
        width: sidebarWith,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: sidebarWith, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      {children}
    </Drawer >
  )
}
