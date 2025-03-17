import React from "react";
import { Outlet } from "react-router-dom";
import SideNavBar from "../Header/SideNavBar";
import "./Content.css";

function Content() {
  
  return (
    <>
      <div className="main-container">
        <div className="layout">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Content;
