import React, { useState } from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import SideNavBar from "./Header/SideNavBar";
import Footer from "./Footer/Footer";

function Layout() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="epub-reader">
      <div className="epub-reader-wrapper">
        <Header setOpenMenu={setOpenMenu} openMenu={openMenu} />
        <div className={`${openMenu ? "sidebar-open" : ""} main-container`}>
          {openMenu ? (
            <div className="sidebar">
              <SideNavBar openMenu={openMenu} />
            </div>
          ) : (
            ""
          )}
          <div className="layout">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
