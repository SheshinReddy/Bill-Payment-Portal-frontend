import { Stack } from "@mui/material";
import HomePageMainBody2 from "./HomePageMainBody2";
import MainContentHeader from "../layout/header/MainContentHeader";

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