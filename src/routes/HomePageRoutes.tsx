import { createBrowserRouter } from "react-router-dom";
import BillerFormPage from "../pages/BillerFormPage";
import PageNotFound from "../components/common/PageNotFound";
import Layout from "../components/layout/Layout";
import HomePageMainBody from "../components/services/HomePageMainBody";
import BillersPage from "../pages/BillersPage";
import BillDetailsPage from "../pages/BillDetailsPage";
import TransactionsMainBody from "../components/services/TransactionsMainBody";
import ComplaintsMainBody from "../components/services/ComplaintsMainBody";
import SavedBillsMainBody from "../components/services/SavedBillsMainBody";
import PaymentPage from "../pages/PaymentPage";
import PaymentSuccessPage from "../pages/PaymentSuccessPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePageMainBody /> 
      },
      {
        path: "*",
        element: <PageNotFound />
      },
      {
        path: "/transactions",
        element: <TransactionsMainBody />
      },
      {
        path: "/complaints",
        element: <ComplaintsMainBody />
      },
      {
        path: "/saved-bills",
        element: <SavedBillsMainBody />
      }
    ]
  },
  {
    path: "/billers/:category",
    element: <BillersPage />
  },
  {
    path: "/biller-form/:category/:billerId",
    element: <BillerFormPage />
  },
  {
    path: "/bill-details/:category/:billerId",
    element: <BillDetailsPage />
  },
  {
    path: "/payment/:category/:billerId",
    element: <PaymentPage />
  },
  {
    path: "/payment-success/:category/:billerId",
    element: <PaymentSuccessPage />
  }
]);