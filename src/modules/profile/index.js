import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function ProfileModule() {
  return (
    <Box sx={{ display: 'flex' }}>

      <Container>
        <Outlet />
      </Container>
    </Box>
  )
}