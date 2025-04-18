import { Box, Stack, useTheme } from "@mui/material";
import SideBarComponent from "./SideBarComponent";
import LogInSideBar from "./LogInSideBar";
import { useState } from "react";
import { sideBarCategories } from "../data/globalData";

function HomePageSideBar() {
    const theme = useTheme();

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    }

    return (
        <Stack
            sx={{
                position: "sticky",
                top: 0,
                minWidth: "350px",
                minHeight: "100vh",
                height: "100%",
                backgroundColor: theme.palette.primary.main,
                overflowY: "auto",
                justifyContent: "space-between",
                display: { xs: "none", md: "block" }
            }}
        >
            <Stack
                direction="column"
                sx={{

                }}
            >
                <Box
                    className="logo"
                    sx={{
                        margin: "50px 0 80px 10px",
                        padding: "0 16px"
                    }}
                >
                    <img
                        src="src\assets\pupilPayIcon.svg"
                        alt="Pupil Pay Logo"
                        style={{
                        }}
                    />
                </Box>

                <Stack
                    direction="column"
                    sx={{
                        // justifyContent: "space-between",
                        justifyContent: "space-around",
                    }}
                >
                    <Stack
                        direction="column"
                        spacing="12px"
                    >
                        {sideBarCategories.map((category) => (
                            <SideBarComponent
                                className={category.text === "Pay Bills" ? "active" : ""}
                                icon={category.icon}
                                text={category.text}
                                onClick={handleClick}
                            />
                        ))}
                    </Stack>
                </Stack>
            </Stack>
            <LogInSideBar />
        </Stack>
    )
}

export default HomePageSideBar;