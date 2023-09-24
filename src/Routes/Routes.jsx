import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import DonationPage from "../DonationPage/DonationPage";
import StatisticsPage from "../StatisticsPage/StatisticsPage";
import Home from "../HomePage/Home";
import CardDetails from "../CardDetails/CardDetails";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch(`../CustomAPI.json`) 
        },
        {
            path: "/donation",
            element: <DonationPage></DonationPage>
        },
        {
            path: "/statistics",
            element: <StatisticsPage></StatisticsPage>
        },
        {
            path: "/cardDetails/:id",
            loader: () => fetch(`../CustomAPI.json`) ,
            element: <CardDetails></CardDetails>
        }
    ]
  },
]);

export default Routes;