import { useState, useRef, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CircularProgress,
  Divider,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useParams, Link, useNavigate } from "react-router-dom";
import { findBillerByIdAndCategory } from "../services/billerService";
import MobileNavbar from "../components/layout/mobile/MobileNavBar";
import HomePageSideBar from "../components/layout/sideBar/HomePageSideBar";

// Define payment method types
type PaymentMethod = "upi" | "debit-card" | "credit-card" | "net-banking";

function PaymentPage() {
  const theme = useTheme();
  const { billerId, category } = useParams();
  const navigate = useNavigate();
  
  // Audio for success sound
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("upi");
  const [upiId, setUpiId] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCvv] = useState("");
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Load audio
  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      // Create the audio element
      const audio = new Audio('/mogoSound.mp3');
      
      // Store in ref
      audioRef.current = audio;
      
      // Set to preload
      audio.preload = 'auto';
      
      // Try to load the audio
      audio.load();
      
      // Clean up on unmount
      return () => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current = null;
        }
      };
    }
  }, []);
  
  // Dummy bill amount
  const billAmount = 1580;
  
  // Mock billerName based on the billerId
  const billerName = findBillerByIdAndCategory(billerId || "", category || "")?.billerName || "Electricity Bill";

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setErrors({});
    
    // Validate based on payment method
    let hasErrors = false;
    const newErrors: Record<string, string> = {};
    
    if (paymentMethod === "upi") {
      if (!upiId.trim()) {
        newErrors.upiId = "UPI ID is required";
        hasErrors = true;
      } else if (!upiId.includes("@")) {
        newErrors.upiId = "Please enter a valid UPI ID";
        hasErrors = true;
      }
    } else if (paymentMethod === "debit-card" || paymentMethod === "credit-card") {
      if (!cardNumber.trim()) {
        newErrors.cardNumber = "Card number is required";
        hasErrors = true;
      } else if (cardNumber.replace(/\s/g, "").length !== 16) {
        newErrors.cardNumber = "Card number must be 16 digits";
        hasErrors = true;
      }
      
      if (!cardName.trim()) {
        newErrors.cardName = "Name on card is required";
        hasErrors = true;
      }
      
      if (!cardExpiry.trim()) {
        newErrors.cardExpiry = "Expiry date is required";
        hasErrors = true;
      } else if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
        newErrors.cardExpiry = "Expiry should be in MM/YY format";
        hasErrors = true;
      }
      
      if (!cardCvv.trim()) {
        newErrors.cardCvv = "CVV is required";
        hasErrors = true;
      } else if (!/^\d{3}$/.test(cardCvv)) {
        newErrors.cardCvv = "CVV must be 3 digits";
        hasErrors = true;
      }
    }
    
    if (hasErrors) {
      setErrors(newErrors);
      return;
    }
    
    // Process payment
    setIsProcessing(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Play the success sound if available
      try {
        if (audioRef.current) {
          // Reset to beginning
          audioRef.current.currentTime = 0;
          // Try to play (may be blocked by browser)
          const playPromise = audioRef.current.play();
          
          if (playPromise !== undefined) {
            playPromise.catch(error => {
              console.warn("Audio play was prevented by browser:", error);
            });
          }
        }
      } catch (audioError) {
        console.warn("Error playing audio:", audioError);
      }
      
      // Navigate to success page
      navigate(`/payment-success/${category}/${billerId}`);
    } catch (error) {
      console.error("Payment processing error:", error);
      setIsProcessing(false);
    }
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Format card number with spaces every 4 digits
    const value = e.target.value.replace(/\s/g, "");
    if (value.length <= 16) {
      setCardNumber(value.replace(/(.{4})/g, "$1 ").trim());
    }
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 4) {
      if (value.length > 2) {
        setCardExpiry(`${value.slice(0, 2)}/${value.slice(2)}`);
      } else {
        setCardExpiry(value);
      }
    }
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 3) {
      setCvv(value);
    }
  };

  return (
    <Box
      className="payment-page-container"
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
        {/* Header */}
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" alignItems="center" spacing={1}>
            <Link 
              to={`/bill-details/${category}/${billerId}`} 
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Typography variant="h4" sx={{ fontSize: "32px", fontWeight: "500" }}>
                ← Payment
              </Typography>
            </Link>
          </Stack>
          <Box
            sx={{
              height: "40px",
              paddingTop: "2px",
            }}
          >
            <img
              src="/src/assets/logos/bharatConnect.svg"
              style={{
                height: "100%",
                objectFit: "cover"
              }}
            />
          </Box>
        </Stack>

        <Typography variant="h6" sx={{ marginTop: "16px", fontWeight: "500" }}>
          {billerName}
        </Typography>

        <Stack direction={{ xs: "column", md: "row" }} spacing={3} sx={{ marginTop: "24px" }}>
          {/* Left Column - Payment Options */}
          <Stack sx={{ width: { xs: "100%", md: "60%" }, maxWidth: "600px" }} spacing={3}>
            <Paper elevation={0} sx={{ border: "1px solid #e0e0e0", borderRadius: "8px", padding: "24px" }}>
              <Typography variant="h6" sx={{ fontWeight: "600", marginBottom: "16px" }}>
                Select Payment Method
              </Typography>
              
              <RadioGroup
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
              >
                <Stack spacing={1}>
                  {/* UPI Option */}
                  <FormControlLabel 
                    value="upi" 
                    control={
                      <Radio 
                        sx={{ 
                          color: theme.palette.icon.primary,
                          '&.Mui-checked': {
                            color: theme.palette.icon.primary,
                          }
                        }} 
                      />
                    } 
                    label={
                      <Typography sx={{ fontWeight: "500" }}>UPI</Typography>
                    } 
                  />
                  
                  {paymentMethod === "upi" && (
                    <Box sx={{ pl: 4, pr: 2, mb: 2 }}>
                      <TextField
                        fullWidth
                        label="Enter UPI ID"
                        placeholder="yourname@upi"
                        variant="outlined"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        error={!!errors.upiId}
                        helperText={errors.upiId}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "8px",
                          }
                        }}
                      />
                    </Box>
                  )}
                  
                  <Divider />
                  
                  {/* Debit Card Option */}
                  <FormControlLabel 
                    value="debit-card" 
                    control={
                      <Radio 
                        sx={{ 
                          color: theme.palette.icon.primary,
                          '&.Mui-checked': {
                            color: theme.palette.icon.primary,
                          }
                        }} 
                      />
                    } 
                    label={
                      <Typography sx={{ fontWeight: "500" }}>Debit Card</Typography>
                    } 
                  />
                  
                  {/* Credit Card Option */}
                  <FormControlLabel 
                    value="credit-card" 
                    control={
                      <Radio 
                        sx={{ 
                          color: theme.palette.icon.primary,
                          '&.Mui-checked': {
                            color: theme.palette.icon.primary,
                          }
                        }} 
                      />
                    } 
                    label={
                      <Typography sx={{ fontWeight: "500" }}>Credit Card</Typography>
                    } 
                  />
                  
                  {(paymentMethod === "debit-card" || paymentMethod === "credit-card") && (
                    <Box sx={{ pl: 4, pr: 2, mb: 2 }}>
                      <Stack spacing={2}>
                        <TextField
                          fullWidth
                          label="Card Number"
                          placeholder="1234 5678 9012 3456"
                          variant="outlined"
                          value={cardNumber}
                          onChange={handleCardNumberChange}
                          error={!!errors.cardNumber}
                          helperText={errors.cardNumber}
                          inputProps={{ maxLength: 19 }}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "8px",
                            }
                          }}
                        />
                        
                        <TextField
                          fullWidth
                          label="Name on Card"
                          placeholder="John Doe"
                          variant="outlined"
                          value={cardName}
                          onChange={(e) => setCardName(e.target.value)}
                          error={!!errors.cardName}
                          helperText={errors.cardName}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "8px",
                            }
                          }}
                        />
                        
                        <Stack direction="row" spacing={2}>
                          <TextField
                            label="Expiry (MM/YY)"
                            placeholder="MM/YY"
                            variant="outlined"
                            value={cardExpiry}
                            onChange={handleExpiryChange}
                            error={!!errors.cardExpiry}
                            helperText={errors.cardExpiry}
                            inputProps={{ maxLength: 5 }}
                            sx={{
                              width: "50%",
                              "& .MuiOutlinedInput-root": {
                                borderRadius: "8px",
                              }
                            }}
                          />
                          
                          <TextField
                            label="CVV"
                            placeholder="123"
                            variant="outlined"
                            value={cardCvv}
                            onChange={handleCvvChange}
                            error={!!errors.cardCvv}
                            helperText={errors.cardCvv}
                            type="password"
                            inputProps={{ maxLength: 3 }}
                            sx={{
                              width: "50%",
                              "& .MuiOutlinedInput-root": {
                                borderRadius: "8px",
                              }
                            }}
                          />
                        </Stack>
                      </Stack>
                    </Box>
                  )}
                  
                  <Divider />
                  
                  {/* Net Banking Option */}
                  <FormControlLabel 
                    value="net-banking" 
                    control={
                      <Radio 
                        sx={{ 
                          color: theme.palette.icon.primary,
                          '&.Mui-checked': {
                            color: theme.palette.icon.primary,
                          }
                        }} 
                      />
                    } 
                    label={
                      <Typography sx={{ fontWeight: "500" }}>Net Banking</Typography>
                    } 
                  />
                  
                  {paymentMethod === "net-banking" && (
                    <Box sx={{ pl: 4, pr: 2, mb: 2 }}>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        Select your bank
                      </Typography>
                      
                      <Stack direction="row" spacing={2} flexWrap="wrap">
                        {["SBI", "HDFC", "ICICI", "Axis Bank"].map((bank) => (
                          <Card 
                            key={bank}
                            variant="outlined"
                            sx={{
                              padding: "12px",
                              width: "100px",
                              textAlign: "center",
                              cursor: "pointer",
                              borderColor: "#e0e0e0",
                              "&:hover": {
                                borderColor: theme.palette.icon.primary,
                              }
                            }}
                          >
                            <Typography variant="body2">{bank}</Typography>
                          </Card>
                        ))}
                      </Stack>
                    </Box>
                  )}
                </Stack>
              </RadioGroup>
            </Paper>
          </Stack>
          
          {/* Right Column - Payment Summary */}
          <Stack sx={{ width: { xs: "100%", md: "40%" } }} spacing={3}>
            <Paper elevation={0} sx={{ border: "1px solid #e0e0e0", borderRadius: "8px", padding: "24px", height: "fit-content" }}>
              <Typography variant="h6" sx={{ fontWeight: "600", marginBottom: "16px" }}>
                Payment Summary
              </Typography>
              
              <Stack spacing={2}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography color="text.secondary">Bill Amount</Typography>
                  <Typography fontWeight="500">₹{billAmount.toLocaleString()}</Typography>
                </Stack>
                
                <Stack direction="row" justifyContent="space-between">
                  <Typography color="text.secondary">Convenience Fee</Typography>
                  <Typography fontWeight="500">₹0</Typography>
                </Stack>
                
                <Divider />
                
                <Stack direction="row" justifyContent="space-between">
                  <Typography fontWeight="600">Total Amount</Typography>
                  <Typography fontWeight="600">₹{billAmount.toLocaleString()}</Typography>
                </Stack>
                
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isProcessing}
                  sx={{
                    mt: 2,
                    backgroundColor: theme.palette.icon.primary,
                    padding: "12px",
                    borderRadius: "8px",
                    color: "#fff",
                    textTransform: "none",
                    fontWeight: 500,
                    "&:hover": {
                      backgroundColor: "#444479",
                    }
                  }}
                >
                  {isProcessing ? (
                    <Stack direction="row" spacing={1} alignItems="center">
                      <CircularProgress size={20} color="inherit" />
                      <span>Processing...</span>
                    </Stack>
                  ) : (
                    "Pay ₹" + billAmount.toLocaleString()
                  )}
                </Button>
                
                <Typography variant="body2" align="center" color="text.secondary" sx={{ mt: 1 }}>
                  By proceeding, you agree to our Terms and Conditions
                </Typography>
              </Stack>
            </Paper>
          </Stack>
        </Stack>
      </Stack>
      <MobileNavbar />
    </Box>
  );
}

export default PaymentPage;