import React from "react";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";

const MainLayout = () => {
  return (
    <div>
      <Nav />
      <div className="min-h-[calc(100vh-100px)]">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
};

export default MainLayout;
