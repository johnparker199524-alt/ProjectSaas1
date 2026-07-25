import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./RoutError404.css";

import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
    ],
  },
]);

const RoutError = () => {
  return <RouterProvider router={router} />;
};

export default RoutError;
