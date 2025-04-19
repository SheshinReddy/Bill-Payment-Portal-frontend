import { Box } from "@mui/material";
import HomePageSideBar from "../components/layout/HomePageSideBar";
import HomePgeMainContent from "../components/services/HomePageMainContent";
import MobileNavbar from "../components/layout/MobileNavBar";

function HomePage() {
    return (
        <>
            <Box
                className="home-page-container"
                sx={{
                    display: "flex",
                    flexdirection: "column",
                    width: "100%",
                    paddingBottom: {
                        xs: "50px",
                        md:"0"
                    }
                }}
            >
                <HomePageSideBar />
                <HomePgeMainContent />
                <MobileNavbar />
            </Box>
        </>
    )
}

export default HomePage;