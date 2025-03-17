import React from "react";
import Header from "../Header/Header";
import "./Layout.css";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";

function Layout() {
  return (
    <div className="epub-reader-wrapper">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Layout;
