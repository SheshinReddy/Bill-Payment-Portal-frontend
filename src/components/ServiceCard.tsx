import { Box, Stack, Typography } from "@mui/material";
import { ServiceItemType } from "../data/globalData";

type ServiceCardProps = {
    item: ServiceItemType;
};

function ServiceCard({ item }: ServiceCardProps) {
    return (
        <Stack
            direction="column"
            sx={{
                height: "180px",
                minWidth: "225px",
                borderRadius: "8px",
                border: "1px solid #00000033",
                gap: "16px",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box>
                <img
                    src={item.iconSource}
                    alt={item.name}
                    style={{
                        width: "60px",
                        height: "60px",
                    }}
                />
            </Box>
            <Box>
                <Typography>
                    {item.name}
                </Typography>
            </Box>
        </Stack>
    )
}

export default ServiceCard;