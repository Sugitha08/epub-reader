import React from "react";
import "./UserDetail.css";
import SideNav from "./SideNav";
import {Link, Outlet } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";


function UserDetail() {
 
  return (
    <>
      <Link to="/user/dashboard" className="mb-2" style={{textDecoration:"none" , fontSize:"19px"}}><IoChevronBack className="mb-1"/>Back</Link>
    <div className="user-details row shadow">
      <div className="col-3 user-menu">
        <SideNav/>
      </div>
      <div className="col-9 outlet">
        <Outlet/>
      </div>
    </div>
    </>
  );
}

export default UserDetail;
