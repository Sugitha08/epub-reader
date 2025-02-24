import React from "react";
import "./UserDetail.css";
import SideNav from "./SideNav";
import { Outlet } from "react-router-dom";


function UserDetail() {
 
  return (
    <div className="user-details row shadow">
      <div className="col-3 user-menu">
        <SideNav/>
      </div>
      <div className="col-9 outlet">
        <Outlet/>
      </div>
    </div>
  );
}

export default UserDetail;
