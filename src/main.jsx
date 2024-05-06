import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import AuthPage from './pages/auth';
import HomePage from './pages/home';

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage />
  },
  {
    path: "/home",
    element: <HomePage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
