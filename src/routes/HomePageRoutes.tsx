import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage"
import BillersPage from "../pages/BillersPage"
import BillersFormPage from "../pages/BillerFormPage"
import PageNotFound from "../components/PageNotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/billers/:category",
        element: <BillersPage/>
    },
    {
        path: "/biller-form/:billerId",
        element: <BillersFormPage/>
    },
    {
        path: "*",
        element: <PageNotFound/>
    }
])