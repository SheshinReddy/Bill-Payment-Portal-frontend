import { Box, Stack, Typography } from "@mui/material";
import {Link } from "react-router-dom"

function PageNotFound() {
  return (
    <Stack
      spacing={2}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <Box
        sx={{paddingBottom: "30px"}}
      >
        <Typography variant="h1" sx={{fontSize: "48 px"}}>Page Not Found</Typography>
      </Box>
      <Box>
        <Typography sx={{fontSize: "24px", fontWeight: "300"}}>The page you are looking for does not exist.</Typography>
      </Box>
      <Box>
        <Typography sx={{fontSize: "24px", fontWeight: "300"}}>Click here to go back to the <Link to="/">home page</Link></Typography>
      </Box>
    </Stack>
  );
}

export default PageNotFound;
