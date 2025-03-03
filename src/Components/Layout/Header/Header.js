import React, { useState } from "react";
import "./Header.css";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import HeaderMenu from "./HeaderMenu";
import { useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Header({ setOpenMenu, openMenu, UserLogin }) {
  const navigate = useNavigate();

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };
  const TitleIcon = () => {
    if (UserLogin) {
      if (UserLogin?.Role === "Publisher") {
        return "EBOOK PUBLISHER";
      } else if (UserLogin?.Role === "User") {
        return "EBOOK USER";
      }
    } else {
      return "EBOOK";
    }
  };
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const handleProfileOpen = (event) => {
    setOpenProfileMenu(event.currentTarget);
  };
  const handleClose = () => {
    setOpenProfileMenu(null);
  };
  const handleHomeNav = () => {
    if (UserLogin) {
      if (UserLogin?.Role === "Publisher") {
        navigate("/publisher/dashboard");
      } else if (UserLogin?.Role === "User") {
        navigate("/user/dashboard");
      }
    } else {
      return;
    }
  };

  return (
    <div className="header">
      <div className="d-flex justify-centent-center align-items-center">
        <div className="menu-icon">
          <IoMdMenu
            size={25}
            className="menu-icon me-2"
            style={{ cursor: "pointer" }}
            onClick={handleMenuOpen}
          />
        </div>
        <h3 role="button" className="title" onClick={handleHomeNav}>
          {TitleIcon()}
        </h3>
      </div>
      <HeaderMenu UserLogin={UserLogin} />
    </div>
  );
}

export default Header;
