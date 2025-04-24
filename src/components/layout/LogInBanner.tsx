import {
  Box,
  Typography,
  Stack,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";

function LogInBanner() {
  return (
    <Stack
      sx={{
        width: "400px",
        minHeight: "100vh",
        height: "100%",
        backgroundColor: "primary.main",
        zIndex: 1000,
        position: "fixed",
        top: "0px",
        right: "0px",
        padding: "20px",
      }}
    >
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "600",
            }}
          >
            Login
          </Typography>
        </Box>
        <Button>
          <Typography
            sx={{
              fontSize: "24px",
              color: "black",
              fontWeight: "600",
            }}
          >
            X
          </Typography>
        </Button>
      </Stack>
      <Stack>
        <Box>
          <Typography>Enter Mobile Number</Typography>
          </Box>
          <Box>
          <TextField
            variant="outlined"
            fullWidth
            type="tel"
            placeholder="(123) 456-7890"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Typography sx={{ ml: 1, mr: 1, color: "text.secondary" }}>
                    +91
                  </Typography>
                </InputAdornment>
              ),
            }}
            inputProps={{
              maxLength: 10,
              pattern: "[0-9]*",
            }}
          />
        </Box>
        <Button type="submit" variant="contained" sx={{
            mt: "50px"
        }}>
          Submit
        </Button>
      </Stack>
    </Stack>
  );
}

export default LogInBanner;
