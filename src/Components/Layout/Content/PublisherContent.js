import React from "react";
import { Outlet } from "react-router-dom";
import SideNavBar from "../Header/SideNavBar";
import "./Content.css";

function PublisherContent({ openMenu }) {
    console.log("Use cpntent");
  return (
    <>
      <div className={`${openMenu ? "sidebar-open" : ""} main-container`}>
        {openMenu && (
          <div className="sidebar">
            <SideNavBar openMenu={openMenu} />
          </div>
        )}
        <div className="layout dsds">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default PublisherContent;
