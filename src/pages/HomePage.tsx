import { Box } from "@mui/material";
import MobileNavbar from "../components/layout/mobile/MobileNavBar";
import HomePageSideBar from "../components/layout/sideBar/HomePageSideBar";
import HomePageMainContent from "../components/services/HomePageMainContent";

function HomePage() {
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
      <HomePageMainContent />
      <MobileNavbar />
    </Box>
  );
}

export default HomePage;
