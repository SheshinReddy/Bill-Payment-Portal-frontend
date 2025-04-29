import { useEffect, useState, useRef } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Paper,
  Stack,
  Typography,
  useTheme,
  Snackbar,
  Alert
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { findBillerByIdAndCategory } from "../services/billerService";
import MobileNavbar from "../components/layout/mobile/MobileNavBar";
import HomePageSideBar from "../components/layout/sideBar/HomePageSideBar";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import HomeIcon from '@mui/icons-material/Home';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { generateReceiptPDF } from "../utils/pdfUtils";

function PaymentSuccessPage() {
  const theme = useTheme();
  const { billerId, category } = useParams();
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error" | "info" | "warning">("success");
  
  // Audio ref for the mogo sound
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Dummy transaction data
  const transactionData = {
    amount: 1580,
    transactionId: "TXN" + Math.floor(Math.random() * 10000000),
    transactionDate: new Date().toLocaleString(),
    paymentMethod: "UPI",
    receiptNumber: "RCP" + Math.floor(Math.random() * 10000000),
    customerName: "Rahul Sharma",
    billNumber: "BILL" + Math.floor(Math.random() * 1000000)
  };
  
  // Get biller name
  const billerName = findBillerByIdAndCategory(billerId || "", category || "")?.billerName || "Electricity Bill";
  
  useEffect(() => {
    // Initialize audio element
    if (typeof window !== 'undefined') {
      try {
        // Create and configure audio
        const audio = new Audio('/mogoSound.mp3');
        audio.preload = "auto";
        audioRef.current = audio;
        
        // Load audio
        audio.load();
      } catch (error) {
        console.warn("Error initializing audio:", error);
      }
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
  
  // Handle play sound
  const handlePlaySound = () => {
    if (audioRef.current) {
      try {
        // Reset to beginning
        audioRef.current.currentTime = 0;
        // Play (this will work as it's from a user interaction)
        audioRef.current.play()
          .then(() => {
            console.log("Audio playing successfully");
          })
          .catch(error => {
            console.warn("Failed to play audio:", error);
            setSnackbarMessage("Failed to play sound. Please check your audio settings.");
            setSnackbarSeverity("warning");
            setSnackbarOpen(true);
          });
      } catch (error) {
        console.error("Failed to play audio:", error);
        setSnackbarMessage("Failed to play sound. Please check your audio settings.");
        setSnackbarSeverity("warning");
        setSnackbarOpen(true);
      }
    } else {
      setSnackbarMessage("Audio player not available");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };
  
  // Handle download receipt
  const handleDownloadReceipt = async () => {
    setDownloading(true);
    
    try {
      // Create the receipt data object with biller name
      const receiptData = {
        ...transactionData,
        billerName: billerName
      };
      
      // Generate and download the PDF
      await generateReceiptPDF(receiptData);
      
      // Show success message
      setSnackbarMessage("Receipt downloaded successfully");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Error generating receipt PDF:", error);
      
      // Show error message
      setSnackbarMessage("Failed to download receipt. Please try again.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    } finally {
      setDownloading(false);
    }
  };
  
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
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
                startIcon={<CloudDownloadIcon />}
                disabled={downloading}
                onClick={handleDownloadReceipt}
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
                {downloading ? "Downloading..." : "Download Receipt"}
              </Button>
              
              <Link 
                to="/" 
                style={{ textDecoration: 'none', width: '100%', flex: 1, display: 'block' }}
              >
                <Button
                  variant="outlined"
                  startIcon={<HomeIcon />}
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
                startIcon={<VolumeUpIcon />}
                onClick={handlePlaySound}
                size="small"
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
      
      {/* Snackbar for notifications */}
      <Snackbar 
        open={snackbarOpen} 
        autoHideDuration={4000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
      
      <MobileNavbar />
    </Box>
  );
}

export default PaymentSuccessPage;