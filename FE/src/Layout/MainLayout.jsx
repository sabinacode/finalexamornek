import React from "react";
import Navbar from "../Components/UserNavbar/Navbar";
import Footer from "../Components/UserFooter/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer/>
    </>
  );
}

export default MainLayout;
