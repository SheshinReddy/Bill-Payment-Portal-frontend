import { Box, Grid, Stack, Typography } from "@mui/material";
import { ServiceCategoryType } from "../data/globalData";

function CategoryCard({ categoryName, items }: ServiceCategoryType) {
    return (
        <Stack>
            <Box>
                <Typography
                    sx={{
                        fontWeight: "600",
                        fontSize: "20px",
                    }}
                >
                    {categoryName}
                </Typography>
            </Box>
            <Grid
                container
            >
                {items.map((item) => (
                    <>
                    </>
                ))}
            </Grid>
        </Stack>
    )
}

export default CategoryCard;
