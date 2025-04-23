
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import BillersPageMainContent from "../components/services/BillersPageMainBody";
import MobileNavbar from "../components/layout/mobile/MobileNavBar";
import HomePageSideBar from "../components/layout/sideBar/HomePageSideBar";

function BillersPage() {
  const { category } = useParams();
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
      <BillersPageMainContent category={category || "Billers"} />
      <MobileNavbar />
    </Box>
  );
}

export default BillersPage;
