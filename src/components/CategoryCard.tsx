import { Box, Grid, Stack, Typography } from "@mui/material";
import { ServiceCategoryType } from "../data/globalData";

function CategoryCard({ categoryName, items }: ServiceCategoryType) {
    return (
        <Stack
            spacing={2}
        >
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
                spacing={3}
            >
                {items.map((item, index) => (
                    <Grid
                        key={index}
                        size={{ xs: 4, sm: 4, md: 3, lg: 3, xl: 2 }}
                    >
                        <Stack
                            spacing={1}
                            sx={{
                                border: '1px solid #E0E0E0',
                                borderRadius: '8px',
                                padding: '16px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: "150px"
                            }}>
                            <Box
                                sx={{
                                    width: "60px",
                                    height: "60px",
                                }}
                            >
                                <img src={item.iconSource} alt={item.name} style={{ width: '100%' }} />
                            </Box>
                            <Box
                                sx={{

                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: "600",
                                        fontSize: "16px",
                                        textAlign: "center"
                                    }}
                                >{item.name}</Typography>
                            </Box>
                        </Stack>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    )
}

export default CategoryCard;
