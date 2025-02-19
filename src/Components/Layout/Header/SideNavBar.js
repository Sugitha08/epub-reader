import React from "react";
import "./SideNavBar.css";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdReviews } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";

function SideNavBar() {
  return (
    <>
      <div className="sidenavbar">
        <Link to="/publisher/dashboard" className="link">
          <FaHome size={20} className="mx-3 mb-1" />
          Home
        </Link>
        <Link to="/report" className="link">
          <FaCloudUploadAlt size={20} className="mx-3 mb-1" />
          Upload File
        </Link>
        <Link className="link">
          <FaHome size={20} className="mx-3 mb-1" />
          Reports
        </Link>
        <Link className="link">
          <IoLibrary size={20} className="mx-3 mb-1" />
          Library
        </Link>
        <Link className="link">
          <MdReviews size={20} className="mx-3 " />
          Reviews
        </Link>
      </div>
      <div className="logout-btn">
        <LuLogOut size={20} className="  me-2 mb-1" />
        Logout
      </div>
    </>
  );
}

export default SideNavBar;
