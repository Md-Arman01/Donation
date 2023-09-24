import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import DonationPage from "../DonationPage/DonationPage";
import StatisticsPage from "../StatisticsPage/StatisticsPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
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