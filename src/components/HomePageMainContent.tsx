import { Stack } from "@mui/material";
import MainContentHeader from "./MainContentHeader";
import HomePageMainBody from "./HomePageMainBody";

function HomePageMainContent() {
    return (
        <Stack
            sx={{
                padding: "32px",
                width: "100%",
            }}
        >
            {/* for header */}
            <MainContentHeader title="Pay Bills" />
            <HomePageMainBody/>
        </Stack>
    )
}

export default HomePageMainContent;