import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import MenuItems from "../../Core-Components/MenuItem";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Publisher_Logout } from "../../../Redux/Action/PublisherAction/PuAuthAction";
import Profile from "../Profile/Profile";
import "./Header.css";

function PublisherHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [openProfileDetails, setProfileDetails] = useState(false);
  const dispatch = useDispatch();
  const handleProfileDetailClose = () => {
    setProfileDetails(false);
  };

  const handleAccountMenuOpen = (event) => {
    setOpenProfileMenu(event.currentTarget);
  };
  const handleProfileOpen = () => {
    // setProfileDetails(true);
    setOpenProfileMenu(null);
  };
  const handleLogout = () => {
    setOpenProfileMenu(null);
    dispatch(Publisher_Logout());
    navigate("/publisher/login");
  };

  const handleClose = () => {
    setOpenProfileMenu(null);
  };
  return (
    <>
      <div className="header">
        <div className="d-flex justify-centent-center align-items-center">
          {/* <div className="menu-icon">
                <IoMdMenu
                  size={25}
                  className="menu-icon me-2"
                  style={{ cursor: "pointer" }}
                  onClick={handleMenuOpen}
                />
              </div> */}
          <h3
            role="button"
            className="title"
            onClick={() => navigate("/publisher/dashboard")}
          >
            HALO PAD READER
          </h3>
        </div>
        <div className="navbar">
          <Link
            to="/publisher/dashboard"
            className={`nav ${
              location.pathname === "/publisher/dashboard" ? "active" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/publisher/dashboard/upload"
            className={`nav ${
              location.pathname === "/publisher/dashboard/upload"
                ? "active"
                : ""
            }`}
          >
            Upload File
          </Link>
          <Link
            to="/publisher/dashboard/library"
            className={`nav ${
              location.pathname === "/publisher/dashboard/library"
                ? "active"
                : ""
            }`}
          >
            Library
          </Link>
        </div>
        <div
          className="profile d-flex justify-content-center align-items-center"
          style={{ cursor: "pointer" }}
          role="button"
          aria-controls={openProfileMenu ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openProfileMenu ? "true" : undefined}
          onClick={handleAccountMenuOpen}
        >
          <FaRegUserCircle />
          <p className="mb-0 ms-2">Account</p>
        </div>
        <MenuItems
          anchorEl={openProfileMenu}
          open={openProfileMenu}
          onClose={handleClose}
          listdata={[
            { label: "Profile", handleClick: handleProfileOpen },
            { label: "My account", handleClick: handleClose },
            { label: "Logout", handleClick: handleLogout },
          ]}
        />
      </div>
      <Profile
        openProfileDetails={openProfileDetails}
        handleClose={handleProfileDetailClose}
      />
    </>
  );
}

export default PublisherHeader;
