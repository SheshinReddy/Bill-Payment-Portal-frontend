import { Box, Stack, Typography, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { billerType } from "../../data/globalData";
import { getBillersByCategory } from "../../services/billerService";

function BillersPageMainContent() {
  const { category } = useParams<{ category: string }>();
  const [billers, setBillers] = useState<billerType[]>([]);

  useEffect(() => {
    if (category) {
      // Get billers for the category
      const foundBillers = getBillersByCategory(category);
      setBillers(foundBillers);
    }
  }, [category]);

  return (
    <Stack spacing={2} sx={{ width: "100%", maxWidth: "800px" }}>
      <Typography variant="h5" sx={{ fontSize: "24px", marginBottom: "16px", marginTop: "24px" }}>
        All billers
      </Typography>

      {billers.length > 0 ? (
        billers.map((biller, index) => {
          // Create URL-friendly version of biller name for the route
          const billerIdParam = encodeURIComponent(
            biller.billerName.toLowerCase().replace(/\s+/g, '-')
          );
          
          return (
            <Box key={index}>
              <Link
                to={`/biller-form/${category}/${billerIdParam}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center" sx={{ padding: "12px 8px" }}>
                  <Box
                    sx={{
                      height: "32px",
                      width: "32px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#f0f0f0",
                      borderRadius: "50%",
                    }}
                  >
                    {biller.billerIcon && <biller.billerIcon />}
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <Typography>{biller.billerName}</Typography>
                  </Box>
                </Stack>
              </Link>
              {index < billers.length - 1 && <Divider />}
            </Box>
          );
        })
      ) : (
        <Typography color="text.secondary">
          No billers available for this category.
        </Typography>
      )}
    </Stack>
  );
}

export default BillersPageMainContent;