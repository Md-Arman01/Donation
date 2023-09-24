import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import DonationPage from "../DonationPage/DonationPage";
import StatisticsPage from "../StatisticsPage/StatisticsPage";
import Home from "../HomePage/Home";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/donation",
            element: <DonationPage></DonationPage>
        },
        {
            path: "/statistics",
            element: <StatisticsPage></StatisticsPage>
        }
    ]
  },
]);

export default Routes;