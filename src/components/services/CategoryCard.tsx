import { Box, Grid, Stack, Typography } from "@mui/material";
import { ServiceCategoryType } from "../../data/globalData";
import { Link } from "react-router-dom";

function CategoryCard({ categoryName, categoryServices }: ServiceCategoryType) {
  const handleClick = () => {};
  return (
    <Stack spacing={2}>
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
      <Grid container spacing={3}>
        {categoryServices.map((service, index) => (
          <Grid
            className="grid-item"
            key={index}
            size={{ xs: 6, sm: 4, md: 3, lg: 3, xl: 2 }}
          >
            <Link
              to={`/billers/${service.serviceName}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
            <Stack
              spacing={1}
              onClick={handleClick}
              sx={{
                border: "1px solid #E0E0E0",
                borderRadius: "8px",
                padding: "16px",
                justifyContent: "center",
                alignItems: "center",
                height: "150px",
                "&:hover": {
                  cursor: "pointer",
                  border: "2px solid #181A22",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                },
              }}
            >
              <Box
                sx={{
                  width: "60px",
                  height: "60px",
                }}
              >
                {service.serviceIcon && <service.serviceIcon />}
              </Box>
              <Box sx={{}}>
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: "16px",
                    textAlign: "center",
                  }}
                >
                  {service.serviceName}
                </Typography>
              </Box>
            </Stack>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

export default CategoryCard;
