import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import "./Layout.css";
import Footer from "./Footer/Footer";
import UserFilterMenu from "./Header/UserFilterMenu";
import Content from "./Content/Content";

function Layout() {
  const [openMenu, setOpenMenu] = useState("");

  return (
    <div className="epub-reader-wrapper">
      <Header setOpenMenu={setOpenMenu} openMenu={openMenu} />
      <Content openMenu={openMenu} />
      <Footer />
    </div>
  );
}

export default Layout;
