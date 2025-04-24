import { createBrowserRouter } from "react-router-dom";
import BillerFormPage from "../pages/BillerFormPage";
import PageNotFound from "../components/common/PageNotFound";
import Layout from "../components/layout/Layout";
import HomePageMainBody from "../components/services/HomePageMainBody";
import BillersPage from "../pages/BillersPage";

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
  }
]);