import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { router } from "./router";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import { RegisterProvider } from "./contexts/RegisterContext.tsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RegisterProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </RegisterProvider>
    </AuthProvider>
  </StrictMode>
);
