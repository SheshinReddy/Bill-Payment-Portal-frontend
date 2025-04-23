import { Box } from "@mui/material";
import bharatConnectIcon from "../../assets/logos/bharatConnect.svg";

function BharatConnectIcon() {
    return (
        <Box
            sx={{
                height: "40px",
                paddingTop: "2px",
            }}
        >
            <img
                src={bharatConnectIcon}
                style={{
                    width: "100%",
                    objectFit: "cover"
                }}
            />
        </Box>
    )
}

export default BharatConnectIcon;