import React from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
  { path: "/", 
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <h1 className="font-family-primary">About</h1>
      },
      {
        path: '/orders',
        element: <h1>Orders</h1>
      }
    ] 
  },
]);

export default router;