import { Box, Stack, Typography, useTheme } from "@mui/material";
import { sideBarCategories } from "../data/globalData";

function MobileNavbar() {
    const theme = useTheme(); 
    return (
        <Stack
            direction="row"
            sx={{
                display: {
                    md: "none",
                },
                position: "fixed",
                bottom: "0",
                width: "100%",
                justifyContent: "space-around",
                alignItems: "center",
                backgroundColor: theme.palette.primary.main,
                padding: "12px 0"
            }}
        >
            {sideBarCategories.map((category, index) => (
                <Stack
                    key={index}
                    direction="column"
                    sx={{
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Box>
                        <img
                            src={category.icon}
                            alt={category.text}
                        />
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                color: theme.palette.primary.contrastText,
                            }}
                        >
                            {category.text}
                        </Typography>
                    </Box>
                </Stack>
            ))}
        </Stack>
    )
}

export default MobileNavbar;