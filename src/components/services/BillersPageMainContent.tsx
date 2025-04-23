import { Box } from "@mui/material";
import MainContentHeader from "../layout/header/MainContentHeader";

function BillersPageMainContent({category}: {category: string}) {
    return (
        <Box
            sx={{
                width: "100%"
            }}
        >
            <MainContentHeader title={category}/>
        </Box>
    )
}

export default BillersPageMainContent;