import { Box, Stack, Typography } from "@mui/material";
import SearchField from "../common/SearchField";
import BharatConnectIcon from "../common/BharatConnectIcon";

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
                <BharatConnectIcon/>
            </Stack>

            <SearchField/>
        </Stack>
    )
}

export default MainContentHeader;