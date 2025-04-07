import React from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";
import CheckoutPage from "../pages/books/CheckoutPage";
import SingleBook from "../pages/books/SingleBook";
import PrivateRoute from "./PrivateRoute";
import OrdersPage from "../pages/books/OrdersPage";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <h1 className="font-family-primary">About</h1>,
      },
      {
        path: "/orders",
        element: <PrivateRoute><OrdersPage /></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <PrivateRoute><CheckoutPage /></PrivateRoute>,
      },
      {
        path: "/books/:id",
        element: <SingleBook />,
      },
      {
        path: "/dashboard",
        element: <AdminRoute><div>Admin Dashboard</div></AdminRoute>,
        children: [
          {
            path: "",
            element: <AdminRoute><div className="font-family-primary">Dashboard Home</div></AdminRoute>,
          },
          {
            path: "add-new-book",
            element: <AdminRoute><div className="font-family-primary">Add New Book</div></AdminRoute>,

          },
          {
            path: "edit-book/:id",
            element: <AdminRoute><div className="font-family-primary">Edit Book</div></AdminRoute>,

          },
          {
            path: "manage-books",
            element: <AdminRoute><div className="font-family-primary">Manage Books</div></AdminRoute>,

          },
        ]
      },
    ],
    
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  },
]);

export default router;
