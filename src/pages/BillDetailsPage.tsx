import { Box, Button, Stack, Typography, Paper, Divider, Chip } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePageSideBar from "../components/layout/sideBar/HomePageSideBar";
import MobileNavbar from "../components/layout/mobile/MobileNavBar";
import { findBillerByIdAndCategory } from "../services/billerService";
import { billerType } from "../data/globalData";

// A type for the bill details
type BillDetails = {
  billNumber: string;
  billDate: string;
  dueDate: string;
  customerName: string;
  billAmount: number;
  connectionAddress: string;
  billPeriod: string;
  lastPayment: {
    amount: number;
    date: string;
  };
  billBreakdown: {
    description: string;
    amount: number;
  }[];
  billStatus: "Unpaid" | "Paid" | "Overdue";
};

function BillDetailsPage() {
  const { billerId, category } = useParams();

  const [biller, setBiller] = useState<billerType | null>(null);
  const [billDetails, setBillDetails] = useState<BillDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the biller details
    if (billerId && category) {
      const foundBiller = findBillerByIdAndCategory(billerId, category);
      if (foundBiller) {
        setBiller(foundBiller);
      }
    }

    // Simulate API call to fetch bill details
    const fetchBillDetails = async () => {
      setLoading(true);
      try {
        // This would be replaced with an actual API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock bill details (in a real app, this would come from the API)
        const mockBillDetails: BillDetails = {
          billNumber: "BILL" + Math.floor(Math.random() * 1000000),
          billDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toLocaleDateString(),
          dueDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toLocaleDateString(),
          customerName: "Rahul Sharma",
          billAmount: Math.floor(Math.random() * 5000) + 500,
          connectionAddress: "Block A-404, Sunset Apartments, Sector 28, Gurugram, Haryana 122001",
          billPeriod: "1 Apr 2025 - 30 Apr 2025",
          lastPayment: {
            amount: Math.floor(Math.random() * 3000) + 500,
            date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
          },
          billBreakdown: [
            { description: "Basic Charges", amount: Math.floor(Math.random() * 2000) + 200 },
            { description: "Service Charges", amount: Math.floor(Math.random() * 500) + 100 },
            { description: "Taxes", amount: Math.floor(Math.random() * 300) + 50 },
          ],
          billStatus: "Unpaid",
        };

        setBillDetails(mockBillDetails);
      } catch (error) {
        console.error("Error fetching bill details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBillDetails();
  }, [billerId, category]);

  // Calculate total from breakdown
  const calculateTotal = () => {
    if (!billDetails) return 0;
    return billDetails.billBreakdown.reduce((total, item) => total + item.amount, 0);
  };

  return (
    <Box
      className="bill-details-page-container"
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
          <Stack direction="row" alignItems="center" spacing={1}>
            <Link 
              to={`/biller-form/${category}/${billerId}`} 
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
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

        {/* Biller name */}
        <Typography variant="h6" sx={{ marginTop: "24px", marginBottom: "16px", fontWeight: "500" }}>
          {biller?.billerName}
        </Typography>

        {loading ? (
          <Box sx={{ padding: "32px 0" }}>
            <Typography>Loading bill details...</Typography>
          </Box>
        ) : billDetails ? (
          <Stack spacing={3} sx={{ maxWidth: "800px" }}>
            {/* Bill Status */}
            <Stack direction="row" alignItems="center" spacing={2}>
              <Chip
                label={billDetails.billStatus}
                color={billDetails.billStatus === "Paid" ? "success" : billDetails.billStatus === "Overdue" ? "error" : "primary"}
                sx={{ 
                  fontWeight: "bold",
                  backgroundColor: billDetails.billStatus === "Paid" ? "#e6f7ed" : billDetails.billStatus === "Overdue" ? "#ffebee" : "#e8eaf6",
                  color: billDetails.billStatus === "Paid" ? "#2e7d32" : billDetails.billStatus === "Overdue" ? "#c62828" : "#51508B",
                  px: 1.5
                }}
              />
              <Typography variant="body2" color="text.secondary">
                Bill #{billDetails.billNumber}
              </Typography>
            </Stack>

            {/* Bill Summary Card */}
            <Paper elevation={0} sx={{ border: "1px solid #e0e0e0", borderRadius: "8px", padding: "24px" }}>
              <Stack spacing={3}>
                <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between">
                  <Typography variant="h5" sx={{ fontWeight: "600" }}>
                    ₹{billDetails.billAmount.toLocaleString()}
                  </Typography>
                  <Link 
                    to={`/payment/${category}/${billerId}`} 
                    style={{ textDecoration: 'none' }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#51508B",
                        padding: "12px 24px",
                        borderRadius: "8px",
                        color: "#fff",
                        textTransform: "none",
                        fontWeight: 500,
                        "&:hover": {
                          backgroundColor: "#444479",
                        }
                      }}
                    >
                      Pay Now
                    </Button>
                  </Link>
                </Stack>

                <Divider />

                {/* Bill information */}
                <Stack spacing={2}>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <Stack spacing={0.5} sx={{ minWidth: "180px" }}>
                      <Typography variant="body2" color="text.secondary">
                        Customer Name
                      </Typography>
                      <Typography variant="body1" fontWeight="500">
                        {billDetails.customerName}
                      </Typography>
                    </Stack>
                    
                    <Stack spacing={0.5} sx={{ minWidth: "180px" }}>
                      <Typography variant="body2" color="text.secondary">
                        Bill Period
                      </Typography>
                      <Typography variant="body1" fontWeight="500">
                        {billDetails.billPeriod}
                      </Typography>
                    </Stack>
                  </Stack>

                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <Stack spacing={0.5} sx={{ minWidth: "180px" }}>
                      <Typography variant="body2" color="text.secondary">
                        Bill Date
                      </Typography>
                      <Typography variant="body1" fontWeight="500">
                        {billDetails.billDate}
                      </Typography>
                    </Stack>
                    
                    <Stack spacing={0.5} sx={{ minWidth: "180px" }}>
                      <Typography variant="body2" color="text.secondary">
                        Due Date
                      </Typography>
                      <Typography variant="body1" fontWeight="500" color={
                        new Date(billDetails.dueDate) < new Date() ? "error.main" : "text.primary"
                      }>
                        {billDetails.dueDate}
                      </Typography>
                    </Stack>
                  </Stack>

                  <Stack spacing={0.5}>
                    <Typography variant="body2" color="text.secondary">
                      Connection Address
                    </Typography>
                    <Typography variant="body1" fontWeight="500">
                      {billDetails.connectionAddress}
                    </Typography>
                  </Stack>

                  <Stack spacing={0.5}>
                    <Typography variant="body2" color="text.secondary">
                      Last Payment
                    </Typography>
                    <Typography variant="body1" fontWeight="500">
                      ₹{billDetails.lastPayment.amount.toLocaleString()} on {billDetails.lastPayment.date}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Paper>

            {/* Bill Breakdown */}
            <Paper elevation={0} sx={{ border: "1px solid #e0e0e0", borderRadius: "8px", padding: "24px" }}>
              <Typography variant="h6" sx={{ fontWeight: "600", marginBottom: "16px" }}>
                Bill Breakdown
              </Typography>
              
              <Stack spacing={2}>
                {billDetails.billBreakdown.map((item, index) => (
                  <Stack 
                    key={index} 
                    direction="row" 
                    justifyContent="space-between"
                    sx={{ 
                      padding: "8px 0",
                      borderBottom: index < billDetails.billBreakdown.length - 1 ? "1px solid #f0f0f0" : "none" 
                    }}
                  >
                    <Typography>{item.description}</Typography>
                    <Typography fontWeight={500}>₹{item.amount.toLocaleString()}</Typography>
                  </Stack>
                ))}

                <Divider />
                
                <Stack direction="row" justifyContent="space-between">
                  <Typography fontWeight="600">Total</Typography>
                  <Typography fontWeight="600">₹{calculateTotal().toLocaleString()}</Typography>
                </Stack>
              </Stack>
            </Paper>

            {/* Action Buttons */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ marginTop: "16px" }}>
              <Link 
                to={`/payment/${category}/${billerId}`} 
                style={{ textDecoration: 'none', flex: 1, display: 'block' }}
              >
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "#51508B",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    color: "#fff",
                    textTransform: "none",
                    fontWeight: 500,
                    "&:hover": {
                      backgroundColor: "#444479",
                    }
                  }}
                >
                  Pay Now
                </Button>
              </Link>
              
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#51508B",
                  color: "#51508B",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  textTransform: "none",
                  fontWeight: 500,
                  "&:hover": {
                    borderColor: "#444479",
                    backgroundColor: "rgba(81, 80, 139, 0.04)",
                  }
                }}
              >
                Download Bill
              </Button>
            </Stack>
          </Stack>
        ) : (
          <Box sx={{ padding: "32px 0" }}>
            <Typography color="error">Failed to load bill details. Please try again.</Typography>
          </Box>
        )}
      </Stack>
      <MobileNavbar />
    </Box>
  );
}

export default BillDetailsPage;