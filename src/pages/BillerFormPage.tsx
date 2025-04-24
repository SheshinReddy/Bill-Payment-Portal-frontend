import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { billerFormFieldType, billerType } from "../data/globalData";
import MobileNavbar from "../components/layout/mobile/MobileNavBar";
import HomePageSideBar from "../components/layout/sideBar/HomePageSideBar";
import { findBillerByIdAndCategory } from "../services/billerService";

function BillerFormPage() {
  const { billerId, category } = useParams();
  const [biller, setBiller] = useState<billerType | null>(null);
  const [formFields, setFormFields] = useState<billerFormFieldType[]>([]);


  useEffect(() => {
    // Find the biller from globalData based on billerId
    if (billerId && category) {
      const foundBiller = findBillerByIdAndCategory(billerId, category);
      
      if (foundBiller) {
        setBiller(foundBiller);
        setFormFields(foundBiller.billerForm || []);
      }
    }
  }, [billerId, category]);

  return (
    <Box
      className="biller-form-page-container"
      sx={{
        display: "flex",
        width: "100%",
        paddingBottom: {
          xs: "50px",
          md: "0",
        },
      }}
    >
      <HomePageSideBar />
      <Stack
        sx={{
          padding: "32px",
          width: "100%",
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" alignItems="center" spacing={1}>
            <Link to={`/billers/${category}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="h4" sx={{ fontSize: "32px", fontWeight: "500" }}>
                ← {category}
              </Typography>
            </Link>
          </Stack>
          <Box>
            <img 
              src="/src/assets/logos/bharatConnect.svg" 
              alt="Bharat Connect" 
              style={{ height: "40px" }}
            />
          </Box>
        </Stack>

        <Typography variant="h6" sx={{ marginTop: "24px", marginBottom: "8px", fontWeight: "500" }}>
          {biller?.billerName}
        </Typography>
        
        <Stack spacing={3} sx={{ maxWidth: "600px", marginTop: "16px" }}>
          {formFields.length > 0 ? (
            <>
              {formFields.map((field, index) => (
                <Stack key={index} spacing={1}>
                  <Typography color="error">* {field.billerPlaceholder}</Typography>
                  <TextField
                    fullWidth
                    placeholder={field.billerPlaceholder}
                    variant="outlined"
                    size="medium"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "4px",
                      }
                    }}
                  />
                </Stack>
              ))}

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#1d0e4b",
                  padding: "12px",
                  borderRadius: "4px",
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: 500,
                  marginTop: "16px",
                }}
              >
                Fetch bill →
              </Button>
            </>
          ) : (
            <Typography color="text.secondary">
              No form fields available for this biller.
            </Typography>
          )}
        </Stack>
      </Stack>
      <MobileNavbar />
    </Box>
  );
}

export default BillerFormPage;