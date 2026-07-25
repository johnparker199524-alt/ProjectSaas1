import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";

import "./RoutLayoutWrap.css";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import React from "react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
    ],
  },
]);

const RoutLayoutWrap = () => {
  return <RouterProvider router={router} />;
};

export default RoutLayoutWrap;
