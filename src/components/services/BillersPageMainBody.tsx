import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { allServices, ServiceItemType } from "../../data/globalData";

function BillersPageMainBody() {
  const { category } = useParams();
  const [selectedService, setSelectedService] = useState<
    ServiceItemType | undefined
  >(undefined);

  useEffect(() => {
    for (const categoryItem of allServices) {
      const service = categoryItem.categoryServices.find(
        (service) =>
          service.serviceName.toLowerCase() === category?.toLowerCase()
      );
      if (service) {
        setSelectedService(service);
        break;
      }
    }
  }, [category]);

  return (
    <Stack spacing={2} sx={{ height: "300px", overflowY: "scroll", maxWidth: {xs: "95%", md: "800px"} }}>
      {selectedService &&
        selectedService.serviceBillers?.map((biller) => {
          return (
            <Link
              to={biller.billerPath || ""}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Stack direction="row" spacing={1}>
                <Box
                  sx={{
                    height: "24px",
                    width: "24px",
                  }}
                >
                  <img
                    src="https://www.apdcl.org/website/img/apdcl_logo.b56b6858.png"
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <Typography sx={{textWrap: "wrap"}}>{biller.billerName}</Typography>
                </Box>
              </Stack>
            </Link>
          );
        })}
    </Stack>
  );
}

export default BillersPageMainBody;
