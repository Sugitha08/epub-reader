import React from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

function Header({ setOpenMenu, openMenu }) {
  const location = useLocation();

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="header">
      <div className="d-flex justify-centent-center align-items-center">
        <IoMdMenu
          size={25}
          className="menu-icon"
          style={{ cursor: "pointer" }}
          onClick={handleMenuOpen}
        />
        <h3 className="title mx-4">EBOOK PUBLISHER</h3>
      </div>

      <div className="navbar">
        <Link
          to="/publisher/dashboard"
          className={`nav ${location.pathname === "/home" ? "active" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/publisher/dashboard/report"
          className={`nav ${location.pathname === "/report" ? "active" : ""}`}
        >
          Report
        </Link>
        <Link
          to="/publisher/dashboard/upload"
          className={`nav ${location.pathname === "/upload" ? "active" : ""}`}
        >
          Upload File
        </Link>
        <Link
          to="/publisher/dashboard/library"
          className={`nav ${location.pathname === "/library" ? "active" : ""}`}
        >
          Library
        </Link>
      </div>
      <div className="profile">
        <FaRegUserCircle className="user" />
        <p>View Profile</p>
      </div>
    </div>
  );
}

export default Header;
