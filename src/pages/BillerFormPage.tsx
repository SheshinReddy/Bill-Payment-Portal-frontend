import { Box, Button, Stack, TextField, Typography, CircularProgress } from "@mui/material";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { billerFormFieldType, billerType } from "../data/globalData";
import MobileNavbar from "../components/layout/mobile/MobileNavBar";
import HomePageSideBar from "../components/layout/sideBar/HomePageSideBar";
import { findBillerByIdAndCategory } from "../services/billerService";

function BillerFormPage() {
  const { billerId, category } = useParams();
  const navigate = useNavigate();
  const [biller, setBiller] = useState<billerType | null>(null);
  const [formFields, setFormFields] = useState<billerFormFieldType[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    // Find the biller from globalData based on billerId
    if (billerId && category) {
      const foundBiller = findBillerByIdAndCategory(billerId, category);
      
      if (foundBiller) {
        setBiller(foundBiller);
        setFormFields(foundBiller.billerForm || []);
        
        // Initialize form values
        const initialValues: Record<string, string> = {};
        foundBiller.billerForm?.forEach((field, index) => {
          initialValues[`field_${index}`] = "";
        });
        setFormValues(initialValues);
      }
    }
  }, [billerId, category]);

  const handleInputChange = (index: number, value: string) => {
    setFormValues({
      ...formValues,
      [`field_${index}`]: value
    });
    
    // Clear error when user types
    if (formErrors[`field_${index}`]) {
      const newErrors = { ...formErrors };
      delete newErrors[`field_${index}`];
      setFormErrors(newErrors);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    let isValid = true;
    
    formFields.forEach((field, index) => {
      if (!formValues[`field_${index}`]?.trim()) {
        newErrors[`field_${index}`] = "This field is required";
        isValid = false;
      }
    });
    
    setFormErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Navigate to bill details page
      navigate(`/bill-details/${category}/${billerId}`);
    } catch (error) {
      console.error("Error fetching bill:", error);
      setIsSubmitting(false);
    }
  };

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
        component="form"
        onSubmit={handleSubmit}
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
                  <Typography color={formErrors[`field_${index}`] ? "error" : "text.primary"}>
                    * {field.billerPlaceholder}
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder={field.billerPlaceholder}
                    variant="outlined"
                    size="medium"
                    value={formValues[`field_${index}`] || ""}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    error={!!formErrors[`field_${index}`]}
                    helperText={formErrors[`field_${index}`]}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "4px",
                      }
                    }}
                  />
                </Stack>
              ))}

              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                sx={{
                  backgroundColor: "#51508B",
                  padding: "12px",
                  borderRadius: "4px",
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: 500,
                  marginTop: "16px",
                  "&:hover": {
                    backgroundColor: "#444479",
                  }
                }}
              >
                {isSubmitting ? (
                  <Stack direction="row" spacing={1} alignItems="center">
                    <CircularProgress size={20} color="inherit" />
                    <span>Fetching bill...</span>
                  </Stack>
                ) : (
                  "Fetch bill →"
                )}
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