import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
/*import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthFunction from "./Forms/SwitchFunction";

import Docs from "./Contents/Docs";
import NavBar from "./NavigationBar/Navbar";

*/
import ErrorPage from "./error-page";
import AuthFunction from "./Forms/SwitchFunction";
import AdminPanel from "./Forms/AdminPanel";
import NavBar from "./NavigationBar/Navbar";
import Docs from "./Contents/Docs";
import Faq from "./Contents/Faq";

import AdminLogin from "./Forms/AdminForm/AdminLoginPage";
import AdminRegister from "./Forms/AdminForm/AdminRegisterPage";

//Routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/signin",
        element: <AuthFunction />,
      },
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/docs",
        element: <Docs />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminPanel />,
  },
  {
    path: "/adminlogin",
    element: <AdminLogin />,
  },
  {
    path: "/adminregister",
    element: <AdminRegister />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
