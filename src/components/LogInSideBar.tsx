import { Box, Stack, Typography } from "@mui/material";

function LogInSideBar() {
    return (
        <Stack
            direction="row"
            sx={{
                gap: "12px",
                justifyContent: "flex-start",
                alignItems: "center",
                padding: "12px 16px",
                marginBottom: "38px",
            }}
        >
            <Box>
                <img
                    src="src\assets\navigation-icons\logIn.svg"
                />
            </Box>
            <Box>
                <Typography
                    sx={{
                        fontWeight: "500",
                        fontSize: "16px",
                        color: "#FFFFFF",
                    }}
                >
                    Login to your Account
                </Typography>
            </Box>
        </Stack>
    )
}

export default LogInSideBar;
