import { Box } from "@mui/material";
import HomePageSideBar from "../components/HomePageSideBar";
import HomePgeMainContent from "../components/HomePageMainContent";

function HomePage() {
    return (
        <Box
            className="home-page-container"
            sx={{
                display: "flex",
                flexdirection: "column",
                width: "100%"
            }}
        >
            <HomePageSideBar />
            <HomePgeMainContent />
        </Box>
    )
}

export default HomePage;