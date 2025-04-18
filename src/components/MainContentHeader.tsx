import { Box, Stack, TextField, Typography } from "@mui/material";
import "../styles/MainContentHeader.css";

type MainContentHeaderProps = {
    title: string;
}

function MainContentHeader({ title }: MainContentHeaderProps) {
    return (
        <Stack
            className="main-content-header-container"
            direction="column"
            sx={{
                width: "100%",
                padding: "16px 0px",
            }}
        >
            <Stack
                className="header-content"
                direction="row"
                sx={{
                    justifyContent: "space-between",
                    alignItems: "top"
                }}
            >
                <Box
                    sx={{
                        height: "48px",
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: "32px",
                            fontWeight: 500,
                            textTransform: "capitalize",
                        }}
                    >
                        {title}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        height: "40px",
                        paddingTop: "2px",
                    }}
                >
                    <img
                        src="src\assets\bharatConnect.svg"
                        style={{
                            width: "100%",
                            objectFit: "cover"
                        }}
                    />
                </Box>
            </Stack>

            {/* for search bar */}
            <div
                className="search-bar-container"
            >
                <TextField
                    className="search-bar"
                    type="search"
                    placeholder="Search for a Bill category"
                    sx={{
                        minWidth: {
                            xs: "280px",
                            md: "350px",
                            lg: "450px",
                            xl: "500px"
                        },
                        marginTop: "32px"
                    }}
                    InputProps={{
                        startAdornment: (
                            <img
                                src="src\assets\search.svg"
                                style={{
                                    width: "20px",
                                    height: "20px",
                                    padding: "0.5px 0"
                                }}
                            />
                        )
                    }}
                />
            </div>
        </Stack>
    )
}

export default MainContentHeader;