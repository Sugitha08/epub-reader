import React, { useState } from "react";
import "./Header.css";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineLanguage } from "react-icons/md";
import SelectField from "../../Core-Components/SelectField";
import { IoCartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import HeaderMenu from "./HeaderMenu";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Header({ setOpenMenu, openMenu, UserLogin }) {
  const [selectedLang, setSelectedLang] = useState("");
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
        <h3 className="title">{TitleIcon()}</h3>
      </div>
      <HeaderMenu UserLogin={UserLogin} />
      {UserLogin?.Role === "User" ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ columnGap: "50px" }}
        >
          <div className="language-field">
            <SelectField
              size="small"
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value)}
              option={[
                { id: 1, value: "EN", label: "EN" },
                { id: 2, value: "ES", label: "ES" },
                { id: 3, value: "FR", label: "FR" },
              ]}
              // defaultValue="EN"
              icon={
                <MdOutlineLanguage
                  className="me-2"
                  size={20}
                  style={{ color: "#f6f6f6" }}
                />
              }
              sx={{
                minWidth: 50,
                border: "none",
                // borderColor: "#f6f6f6",
                // "& .MuiOutlinedInput-root": {
                //   color: "#f6f6f6",
                //   "& fieldset": {
                //     borderColor: "#f6f6f6",
                //   },
                //   "&:hover fieldset": {
                //     borderColor: "#f6f6f6",
                //   },
                //   "&.Mui-focused fieldset": {
                //     borderColor: "#f6f6f6",
                //   },
                // },
              }}
            />
          </div>
          <div
            className="wishlist"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/user/dash/detail/wishlist")}
          >
            <FaHeart
              className="me-2 mb-1"
              size={16}
              style={{ color: "#f6f6f6" }}
            />
            <span>wishlist</span>
          </div>
          <div
            className="profile"
            style={{ cursor: "pointer" }}
            role="button"
            aria-controls={openProfileMenu ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openProfileMenu ? "true" : undefined}
            onClick={handleProfileOpen}
          >
            <FaRegUserCircle
              className="me-2 mb-1"
              size={16}
              style={{ color: "#f6f6f6" }}
            />
            <span>Account</span>
          </div>
          <Menu
            id="basic-menu"
            anchorEl={openProfileMenu}
            open={openProfileMenu}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{
              zIndex: "999999",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
          <div
            className="cart"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/user/dash/detail/order")}
          >
            <Badge
              badgeContent={4}
              color="primary"
              size="small"
              sx={{
                "& .MuiBadge-badge": {
                  fontSize: "0.7rem", // Change text size inside the badge
                  height: "16px", // Adjust badge height
                  minWidth: "15px",
                },
              }}
            >
              <IoCartOutline
                className="mb-1"
                size={18}
                style={{ color: "#f6f6f6" }}
              />
            </Badge>

            <span className="ms-2">Cart</span>
          </div>
        </div>
      ) : (
        <>
          <div
            className="profile d-flex justify-content-center align-items-center"
            style={{ cursor: "pointer" }}
            role="button"
            aria-controls={openProfileMenu ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openProfileMenu ? "true" : undefined}
            onClick={handleProfileOpen}
          >
            <FaRegUserCircle />
            <p className="mb-0 ms-2">Account</p>
          </div>
          <Menu
            id="basic-menu"
            anchorEl={openProfileMenu}
            open={openProfileMenu}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{
              zIndex: "999999",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </>
      )}
    </div>
  );
}

export default Header;
