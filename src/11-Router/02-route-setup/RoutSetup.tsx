import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";

const router = createBrowserRouter([{ path: "/", element: <HomePage /> }]);

const RouterSetup=()=> {
  return <RouterProvider router={router} />;
}

export default RouterSetup;
