import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./RoutIndexRoutes.css";

import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetail";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

const RoutIndexRoutes = () => {
  return <RouterProvider router={router} />;
};

export default RoutIndexRoutes;
