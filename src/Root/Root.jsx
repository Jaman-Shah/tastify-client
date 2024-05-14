import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-20">
        {" "}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
