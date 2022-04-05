import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ChatIcon from '@mui/icons-material/Chat';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CloseIcon from '@mui/icons-material/Close';
import { Collapse, Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleModulesDrawer } from './headerBar.slice';
import { ModuleLayoutContext } from '../LayoutModule';
import { grey, indigo } from '@mui/material/colors';
import { Link } from 'react-router-dom';
// import ModuleBar from '../ModuleBar';

const modules = [
  { name: 'chat', icon: <ChatIcon />, path: '/app/chat' },
  { name: 'timesheet', icon: <AccessTimeIcon />, path: '/app/timekeeper' },
];
const settings = [
  { path: '/app/profile', label: 'Profile' },
  { path: '/logout', label: 'Logout' },
];
const brand = 'Trithucmoi ERP'

const HeaderBar = ({ logoWidth }) => {
  const dispatch = useDispatch()

  const { activeModule } = useContext(ModuleLayoutContext);
  const modulesDrawerOpen = useSelector(state => state.headerBar.modulesDrawerOpen)
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, width: logoWidth }}>
            <Typography
              variant="h6"
              noWrap
              sx={{ p: 2 }}
            >
              {brand}
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={() => dispatch(toggleModulesDrawer(!modulesDrawerOpen))}
            >
              {!modulesDrawerOpen ? <MenuIcon /> : <CloseIcon />}
            </IconButton>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            {brand}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {modules.map((module) => (
              <IconButton
                key={module.name}
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                component={Link}
                to={module.path}
              >
                {module.icon}
              </IconButton>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, mr: 2 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.path} onClick={handleCloseUserMenu} component={Link} to={setting.path}>
                  <Typography textAlign="center">{setting.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={modulesDrawerOpen}
        onClose={() => dispatch(toggleModulesDrawer(false))}
      >
        <Toolbar />
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: indigo[600], pt: 0, height: '100%' }}
          component="nav"
        >
          {
            modules.map((m, i) => m.name === activeModule.moduleId
              ? (
                <React.Fragment key={i}>
                  <ListItemButton sx={{ background: indigo[500] }} component={Link} to={m.path}>
                    <ListItemIcon sx={{ color: grey[50] }}>
                      {m.icon}
                    </ListItemIcon>
                    <ListItemText primary={m.name.toUpperCase()} sx={{ color: grey[50] }} />
                  </ListItemButton>
                  {
                    activeModule.childMenu && <Collapse in={true} timeout="auto" unmountOnExit>
                      <List component="div" sx={{ pl: 4, pr: 4 }}>
                        {activeModule.childMenu}
                      </List>
                    </Collapse>
                  }
                </React.Fragment>
              ) : (
                <ListItemButton key={i} sx={{ background: indigo[500] }} component={Link} to={m.path}>
                  <ListItemIcon sx={{ color: grey[50] }}>
                    {m.icon}
                  </ListItemIcon>
                  <ListItemText primary={m.name.toUpperCase()} sx={{ color: grey[50] }} />
                </ListItemButton>
              ))
          }
        </List>
      </Drawer>
    </>
  );
};

export default HeaderBar;
