import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, Toolbar } from "@mui/material";
import { indigo } from "@mui/material/colors";
import ChatIcon from '@mui/icons-material/Chat';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'

export default function ModuleBar() {
  return (
    <Box
      sx={{
        boxShadow: 1,
        height: '100%',
        width: '64px',
        background: indigo[500],
        color: 'white'
      }}>
      <Toolbar />
      <nav aria-label="chat module">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ChatIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="HR module">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountBalanceIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  )
}