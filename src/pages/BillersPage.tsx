import { useParams } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import BillersPageMainContent from "../components/services/BillersPageMainBody";
import MobileNavbar from "../components/layout/mobile/MobileNavBar";
import HomePageSideBar from "../components/layout/sideBar/HomePageSideBar";
import MainContentHeader from "../components/layout/header/MainContentHeader";

function BillersPage() {
  const { category } = useParams();
  const categoryName = category || "Billers";
  
  return (
    <Box
      className="billers-page-container"
      sx={{
        display: "flex",
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
        <MainContentHeader title={`${categoryName}`} />
        <BillersPageMainContent />
      </Stack>
      <MobileNavbar />
    </Box>
  );
}

export default BillersPage;