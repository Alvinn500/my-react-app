import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "./Pages/login.jsx";
import RegisterPage from "./Pages/register.jsx";
import ErrorPage from "./Pages/404";
import ProductPage from "./Pages/product";
import ProfilePage from "./Pages/profile";
import DetailProduct from "./Pages/detailProduct";

const router = createBrowserRouter([
  {
    path: "/my-react-app/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/my-react-app/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/my-react-app/register",
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/my-react-app/products",
    element: <ProductPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/my-react-app/profile",
    element: <ProfilePage />,
  },
  {
    path: "/my-react-app/product/:id",
    element: <DetailProduct />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
