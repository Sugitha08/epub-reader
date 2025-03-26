import React from "react";
import { Outlet } from "react-router-dom";
import SideNavBar from "../Header/SideNavBar";
import "./Content.css";

function UserContent({ openMenu }) {
  return (
    <>
      <div className={`${openMenu ? "sidebar-open" : ""} main-container`}>
        {openMenu && (
          <div className="sidebar">
            <SideNavBar openMenu={openMenu} />
          </div>
        )}
        <div className="userlayout layout">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default UserContent;
