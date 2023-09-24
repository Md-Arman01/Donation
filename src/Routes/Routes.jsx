import {
    createBrowserRouter,
  } from "react-router-dom";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <div className="text-5xl text-center">Hello world!</div>,
  },
]);

export default Routes;