import HomePageSideBar from "./sideBar/HomePageSideBar";
import MobileNavbar from "./mobile/MobileNavBar";
import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import MainContentHeader from "./header/MainContentHeader";
import LogInBanner from "./LogInBanner";

function Layout() {
  return (
    <Box
      className="home-page-container"
      sx={{
        display: "flex",
        flexdirection: "column",
        width: "100%",
        paddingBottom: {
          xs: "50px",
          md: "0",
        },
      }}
    >
      <HomePageSideBar />
      <Stack
        sx={{
          padding: "32px",
          width: "100%",
        }}
      >
        <MainContentHeader title="Pay Bills" />
        <Outlet />
      </Stack>
      <LogInBanner />
      <MobileNavbar />
    </Box>
  );
}

export default Layout;
