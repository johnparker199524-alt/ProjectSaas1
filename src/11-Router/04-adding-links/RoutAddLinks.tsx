import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import Contacts from "./pages/Contacts";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductsPage /> },
  { path: "/contacts", element: <Contacts /> },
]);

const RoutAddLinks = () => {
  return <RouterProvider router={router} />;
};

export default RoutAddLinks;
