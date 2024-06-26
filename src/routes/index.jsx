import React from "react";
import { createBrowserRouter } from "react-router-dom";

// components import
import Loader from "../pages/loading-page";
import { Login, Register } from "../pages";
import HomePage from "../pages/home";
import Dashboard from "../pages/dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/register",
    element: (
      <React.Suspense fallback={<Loader />}>
        <Register />
      </React.Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <React.Suspense fallback={<Loader />}>
        <Login />
      </React.Suspense>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <React.Suspense fallback={<Loader />}>
        <Dashboard />
      </React.Suspense>
    )
  }
]);
