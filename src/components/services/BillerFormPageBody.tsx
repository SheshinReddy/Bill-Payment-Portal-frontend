import { Stack, Box, Typography, TextField, Button } from "@mui/material";

function BillerFormPage () {
    return (
        <Stack>
            <Box>
                <Typography>Enter Unique ID</Typography>
            </Box>
            <Box>
                <TextField/>
            </Box>
            <Box>
                <Button>Fetch Bill </Button>
            </Box>
        </Stack>
    )
}

export default BillerFormPage;