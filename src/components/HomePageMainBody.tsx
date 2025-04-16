import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { ServiceItemType, services } from "../data/globalData";
import ServiceCard from "./ServiceCard";

function HomePageMainBody() {
    return (
        <Stack
            id="main-body-container"
            direction="column"
            gap="32px"
        >
            {services.map((category) => (
                <>
                    <Stack
                        id="category-container"
                        direction="column"
                        sx={{
                            gap: "16px",
                            width: "100%",
                        }}

                    >
                        <Box
                            id="category-name"
                        >
                            <Typography
                                sx={{
                                    fontWeight: 600,
                                    fontSize: "20px",
                                }}
                            >
                                {category.categoryName}
                            </Typography>
                        </Box>

                        <Grid
                            container
                            spacing={{ xs: 2, sm: 3, md: 4 }}
                            justifyContent="flex-start"
                            sx={{ flexGrow: 1 }}
                        >
                            {category.items.map((item: ServiceItemType) => (
                                <Grid

                                >
                                    <ServiceCard item={item} />
                                </Grid>
                            ))}
                        </Grid>
                    </Stack>
                    <Divider
                        sx={{
                            borderBottom: "4px solid #F7F8FA",
                        }}
                    />
                </>
            ))}
        </Stack>
    )
}

export default HomePageMainBody;