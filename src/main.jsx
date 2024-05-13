import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, useLocation } from "react-router-dom";
import { routers } from "./routers/Routers.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routers}>
        <ScrollToTop />
      </RouterProvider>
      <Toaster />
    </AuthProvider>
  </React.StrictMode>
);
