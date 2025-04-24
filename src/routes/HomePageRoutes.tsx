import {createBrowserRouter} from "react-router-dom";
import BillersFormPage from "../pages/BillerFormPage"
import PageNotFound from "../components/common/PageNotFound";
import Layout from "../components/layout/Layout";
import BillersPageMainBody from "../components/services/BillersPageMainBody";
import HomePageMainBody from "../components/services/HomePageMainBody";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <HomePageMainBody/>
            },
            {
                path: "/billers/:category",
                element: <BillersPageMainBody />
            },
            {
                path: "/biller-form/:billerId",
                element: <BillersFormPage/>
            },
            {
                path: "*",
                element: <PageNotFound/>
            }
        ]
    }
])