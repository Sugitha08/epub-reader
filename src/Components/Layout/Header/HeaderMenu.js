import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import { MdOutlineLanguage } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import Badge from "@mui/material/Badge";
import { useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaRegUserCircle } from "react-icons/fa";

function HeaderMenu({ UserLogin }) {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLang, setSelectedLang] = useState("EN");
  const navigate = useNavigate();
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const handleProfileOpen = (event) => {
    setOpenProfileMenu(event.currentTarget);
  };
  const handleClose = () => {
    setOpenProfileMenu(null);
  };
  const handleLogout = () => {
    setOpenProfileMenu(null);
    navigate("/");
  };
  const options = [
    { label: "Option 1" },
    { label: "Option 2" },
    { label: "Option 3" },
  ];

  console.log("Autocomplete Options:", options);
  const MenuItems = () => {
    if (UserLogin) {
      if (UserLogin?.Role === "User") {
        return (
          <>
            <div className="userHeader">
              <Autocomplete
                options={options}
                value={searchQuery}
                onChange={(event, newValue) => setSearchQuery(newValue)}
                disableClearable
                popupIcon={null}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Search by Title , Author , Genre and more..."
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <InputAdornment position="end">
                          <CiSearch size={22} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        paddingRight: "20px !important",
                      },
                    }}
                  />
                )}
                sx={{
                  padding: "0px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  width: "500px",
                  height: "38px",
                  "& .MuiTextField-root": {
                    padding: "0px",
                    width: "500px",
                    height: "38px",
                  },
                  "& .MuiOutlinedInput-root": {
                    width: "500px",
                    height: "38px",
                    borderRadius: "10px",
                    "& fieldset": { border: "none" }, // Remove border
                  },
                  "& .MuiAutocomplete-hasPopupIcon": {
                    paddingRight: "0px",
                  },
                }}
              />
            </div>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ columnGap: "50px" }}
            >
              <div className="language-field">
                <Autocomplete
                  options={[
                    { id: 1, value: "EN", label: "EN" },
                    { id: 2, value: "ES", label: "ES" },
                    { id: 3, value: "FR", label: "FR" },
                  ]}
                  disableClearable
                  value={selectedLang}
                  onChange={(event, newValue) => setSelectedLang(newValue)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                          <InputAdornment position="start" sx={{marginRight:"0px"}}>
                            <MdOutlineLanguage
                              size={20}
                              style={{ color: "#f6f6f6" }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                  sx={{
                    padding: "0px",
                    borderRadius: "5px",
                    width: "90px",
                    height: "38px",
                    "& .MuiTextField-root": {
                      padding: "0px",
                      width: "100px",
                      height: "38px",
                    },
                    "& .MuiOutlinedInput-root": {
                      width: "90px",
                      height: "38px",
                      color: "#f6f6f6",
                      "& fieldset": {
                        border: "0.5px solid #f6f6f6",
                      },
                      "&:hover fieldset": {
                        borderColor: "#f6f6f6",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#f6f6f6",
                      },
                    },
                    "& .MuiSvgIcon-root":{
                      color:"#f6f6f6"
                    },
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
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
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
          </>
        );
      } else if (UserLogin?.Role === "Publisher") {
        return (
          <>
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
                to="/publisher/dashboard/report"
                className={`nav ${
                  location.pathname === "/publisher/dashboard/report"
                    ? "active"
                    : ""
                }`}
              >
                Report
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
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </>
        );
      } else {
        return;
      }
    } else {
      return null;
    }
  };
  return <>{MenuItems()}</>;
}

export default HeaderMenu;
