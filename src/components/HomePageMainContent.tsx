import { Stack } from "@mui/material";
import MainContentHeader from "./MainContentHeader";
import HomePageMainBody2 from "./HomePageMainBody2";

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
            <HomePageMainBody2/>
        </Stack>
    )
}

export default HomePageMainContent;