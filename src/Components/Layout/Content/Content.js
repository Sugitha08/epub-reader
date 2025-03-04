import React from "react";
import { Outlet } from "react-router-dom";
import SideNavBar from "../Header/SideNavBar";
import "./Content.css";

function Content({ openMenu }) {
  return (
    <>
      <div className={`${openMenu ? "sidebar-open" : ""} main-container`}>
        {openMenu && (
          <div className="sidebar">
            <SideNavBar openMenu={openMenu} />
          </div>
        )}
        <div className={`${"Role" === "User" ? "userlayout" : ""} layout`}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Content;
