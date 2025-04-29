import { useEffect, useState, useRef } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Paper,
  Stack,
  Typography,
  useTheme
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { findBillerByIdAndCategory } from "../services/billerService";
import MobileNavbar from "../components/layout/mobile/MobileNavBar";
import HomePageSideBar from "../components/layout/sideBar/HomePageSideBar";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PlaySoundButton from "../components/services/PlaySoundButton";

function PaymentSuccessPage() {
  const theme = useTheme();
  const { billerId, category } = useParams();
  const [loading, setLoading] = useState(true);
  
  // Audio ref for the mogo sound
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Dummy transaction data
  const transactionData = {
    amount: 1580,
    transactionId: "TXN" + Math.floor(Math.random() * 10000000),
    transactionDate: new Date().toLocaleString(),
    paymentMethod: "UPI",
    receiptNumber: "RCP" + Math.floor(Math.random() * 10000000),
  };
  
  // Get biller name
  const billerName = findBillerByIdAndCategory(billerId || "", category || "")?.billerName || "Electricity Bill";
  
  useEffect(() => {
    // Initialize audio element
    if (typeof window !== 'undefined') {
      // Create and configure audio
      const audio = new Audio('/mogoSound.mp3');
      audio.preload = "auto";
      audioRef.current = audio;
      
      // Load audio
      audio.load();
    }
    
    // Simulate loading then play sound
    const timer = setTimeout(() => {
      setLoading(false);
      
      // Try to play sound
      if (audioRef.current) {
        try {
          const playPromise = audioRef.current.play();
          
          if (playPromise !== undefined) {
            playPromise.catch(err => {
              console.warn("Auto-play was prevented by browser:", err);
            });
          }
        } catch (err) {
          console.warn("Error playing audio:", err);
        }
      }
    }, 1000);
    
    // Cleanup
    return () => {
      clearTimeout(timer);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);
  
  const handlePlaySound = () => {
    if (audioRef.current) {
      try {
        // Reset to beginning
        audioRef.current.currentTime = 0;
        // Play (this will work as it's from a user interaction)
        audioRef.current.play();
      } catch (error) {
        console.error("Failed to play audio:", error);
      }
    }
  };
  
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress size={60} sx={{ color: theme.palette.icon.primary }} />
      </Box>
    );
  }
  
  return (
    <Box
      className="payment-success-container"
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
        {/* Header */}
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h4" sx={{ fontSize: "32px", fontWeight: "500" }}>
            Payment Status
          </Typography>
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

        {/* Success Card */}
        <Paper 
          elevation={0} 
          sx={{ 
            border: "1px solid #e0e0e0", 
            borderRadius: "8px", 
            padding: "32px", 
            maxWidth: "600px",
            marginTop: "32px",
          }}
        >
          <Stack spacing={4} alignItems="center">
            <Stack alignItems="center" spacing={2}>
              <CheckCircleIcon 
                sx={{ 
                  fontSize: 80, 
                  color: "#4caf50"
                }} 
              />
              <Typography variant="h5" sx={{ fontWeight: "600" }}>
                Payment Successful!
              </Typography>
              <Typography align="center" color="text.secondary">
                Your payment of ₹{transactionData.amount.toLocaleString()} for {billerName} has been successfully processed.
              </Typography>
            </Stack>
            
            <Divider sx={{ width: "100%" }} />
            
            {/* Transaction Details */}
            <Stack spacing={2} sx={{ width: "100%" }}>
              <Typography variant="h6" sx={{ fontWeight: "600" }}>
                Transaction Details
              </Typography>
              
              <Stack spacing={2}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography color="text.secondary">Transaction ID</Typography>
                  <Typography fontWeight="500">{transactionData.transactionId}</Typography>
                </Stack>
                
                <Stack direction="row" justifyContent="space-between">
                  <Typography color="text.secondary">Date & Time</Typography>
                  <Typography fontWeight="500">{transactionData.transactionDate}</Typography>
                </Stack>
                
                <Stack direction="row" justifyContent="space-between">
                  <Typography color="text.secondary">Amount Paid</Typography>
                  <Typography fontWeight="500">₹{transactionData.amount.toLocaleString()}</Typography>
                </Stack>
                
                <Stack direction="row" justifyContent="space-between">
                  <Typography color="text.secondary">Payment Method</Typography>
                  <Typography fontWeight="500">{transactionData.paymentMethod}</Typography>
                </Stack>
                
                <Stack direction="row" justifyContent="space-between">
                  <Typography color="text.secondary">Receipt Number</Typography>
                  <Typography fontWeight="500">{transactionData.receiptNumber}</Typography>
                </Stack>
              </Stack>
            </Stack>
            
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ width: "100%" }}>
              <Button
                variant="contained"
                sx={{
                  flex: 1,
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
                Download Receipt
              </Button>
              
              <Link 
                to="/" 
                style={{ textDecoration: 'none', width: '100%', flex: 1, display: 'block' }}
              >
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    borderColor: theme.palette.icon.primary,
                    color: theme.palette.icon.primary,
                    padding: "12px",
                    borderRadius: "8px",
                    textTransform: "none",
                    fontWeight: 500,
                    "&:hover": {
                      borderColor: "#444479",
                      backgroundColor: "rgba(81, 80, 139, 0.04)",
                    }
                  }}
                >
                  Back to Home
                </Button>
              </Link>
            </Stack>
            
            {/* Sound test button */}
            <Box sx={{ mt: 2 }}>
              <Button 
                variant="outlined" 
                onClick={handlePlaySound}
                sx={{
                  borderColor: theme.palette.icon.primary,
                  color: theme.palette.icon.primary,
                  padding: "8px 16px",
                  borderRadius: "8px",
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: "14px",
                  "&:hover": {
                    borderColor: "#444479",
                    backgroundColor: "rgba(81, 80, 139, 0.04)",
                  }
                }}
              >
                Play BharatConnect MOGO Sound
              </Button>
            </Box>
          </Stack>
        </Paper>
      </Stack>
      <MobileNavbar />
    </Box>
  );
}

export default PaymentSuccessPage;