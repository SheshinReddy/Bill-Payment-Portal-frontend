import {
    Box,
    Typography,
    Stack,
    Button,
    TextField,
    InputAdornment,
    IconButton,
    useTheme,
    Slide,
    Backdrop,
    Fade,
  } from "@mui/material";
  import { useContext } from "react";
  import { LoginContext } from "../../context/LoginContext";
  import CloseIcon from "../../assets/icons/utility/CloseIcon";
  
  function LogInBanner() {
    const theme = useTheme();
    const { isLoginBannerOpen, closeLoginBanner } = useContext(LoginContext);
  
    return (
      <>
        {/* Backdrop for overlay effect */}
        <Backdrop
          sx={{
            color: "#fff",
            zIndex: 999,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
          open={isLoginBannerOpen}
          onClick={closeLoginBanner}
        />
  
        {/* Slide in animation for the login panel */}
        <Slide 
          direction="left" 
          in={isLoginBannerOpen} 
          mountOnEnter 
          unmountOnExit
          timeout={{ enter: 300, exit: 200 }}
        >
          <Stack
            sx={{
              width: { xs: "100%", sm: "400px" },
              minHeight: "100vh",
              height: "100%",
              backgroundColor: theme.palette.primary.main,
              zIndex: 1000,
              position: "fixed",
              top: "0px",
              right: "0px",
              padding: "20px",
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <Stack
              direction="row"
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "30px",
              }}
            >
              <Fade in={isLoginBannerOpen} timeout={500}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "24px",
                      fontWeight: "600",
                      color: theme.palette.text.primary,
                    }}
                  >
                    Login
                  </Typography>
                </Box>
              </Fade>
              <IconButton 
                onClick={closeLoginBanner}
                sx={{ 
                  color: theme.palette.text.primary,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor: theme.palette.action?.hover || "rgba(0, 0, 0, 0.04)",
                    transform: "rotate(90deg)",
                  }
                }}
              >
                <CloseIcon />
              </IconButton>
            </Stack>
            <Fade in={isLoginBannerOpen} timeout={700}>
              <Stack spacing={3}>
                <Box>
                  <Typography 
                    sx={{ 
                      color: theme.palette.text.primary,
                      marginBottom: "8px",
                      fontWeight: 500
                    }}
                  >
                    Enter Mobile Number
                  </Typography>
                  <TextField
                    variant="outlined"
                    fullWidth
                    type="tel"
                    placeholder="Enter your mobile number"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Typography sx={{ ml: 1, mr: 1, color: theme.palette.text.secondary }}>
                            +91
                          </Typography>
                        </InputAdornment>
                      ),
                    }}
                    inputProps={{
                      maxLength: 10,
                      pattern: "[0-9]*",
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        borderColor: theme.palette.border.light,
                        transition: "all 0.3s ease",
                        "&:hover fieldset": {
                          borderColor: theme.palette.icon.primary,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: theme.palette.icon.primary,
                        }
                      }
                    }}
                  />
                </Box>
                <Button 
                  type="submit" 
                  variant="contained" 
                  sx={{
                    mt: "50px",
                    backgroundColor: theme.palette.icon.primary,
                    color: "#ffffff",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    textTransform: "none",
                    fontWeight: 500,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: theme.palette.icon.primary,
                      opacity: 0.9,
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }
                  }}
                >
                  Submit
                </Button>
              </Stack>
            </Fade>
          </Stack>
        </Slide>
      </>
    );
  }
  
  export default LogInBanner;