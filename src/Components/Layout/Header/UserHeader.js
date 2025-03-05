import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Autocomplete, InputAdornment, TextField, Badge } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import { MdOutlineLanguage } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import MenuItems from "../../Core-Components/MenuItem";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { User_Logout } from "../../../Redux/Action/UserAction/UserLoginAction";
import { MdLibraryBooks } from "react-icons/md";
import UserFilterMenu from "./UserFilterMenu";
import Profile from "../Profile/Profile";

function UserHeader() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLang, setSelectedLang] = useState("EN");
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAccountMenuOpen = (event) => {
    setOpenProfileMenu(event.currentTarget);
  };
  const [openProfileDetails, setProfileDetails] = useState(false);
  const handleProfileDetailClose = () => {
    setProfileDetails(false);
  };
  const options = [
    { label: "Author" },
    { label: "Romance" },
    { label: "Fantacy" },
  ];
  const handleProfileOpen = () => {
    setProfileDetails(true);
    setOpenProfileMenu(null);
  };
  const handleLogout = () => {
    setOpenProfileMenu(null);
    dispatch(User_Logout());
    navigate("/");
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
            onClick={() => navigate("/user/dashboard")}
          >
            HALO PAD READER
          </h3>
        </div>
        <div className="userHeader">
          <Autocomplete
            options={options}
            value={searchQuery}
            onChange={(event, newValue) => setSearchQuery(newValue)}
            // disableClearable
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
              width: "300px",
              height: "38px",
              "& .MuiTextField-root": {
                padding: "0px",
                width: "300px",
                height: "38px",
              },
              "& .MuiOutlinedInput-root": {
                width: "300px",
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
                      <InputAdornment
                        position="start"
                        sx={{ marginRight: "0px" }}
                      >
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
                "& .MuiSvgIcon-root": {
                  color: "#f6f6f6",
                },
              }}
            />
          </div>
          <div
            className="wishlist"
            style={{ cursor: "pointer",userSelect:"none" }}
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
            style={{ cursor: "pointer",userSelect:"none" }}
            role="button"
            onClick={() => navigate("/user/dash/detail/library")}
          >
            <MdLibraryBooks
              className="me-2 mb-1"
              size={16}
              style={{ color: "#f6f6f6" }}
            />
            <span>My Library</span>
          </div>
          <div
            className="profile"
            style={{ cursor: "pointer",userSelect:"none" }}
            role="button"
            aria-controls={openProfileMenu ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openProfileMenu ? "true" : undefined}
            onClick={handleAccountMenuOpen}
          >
            <FaRegUserCircle
              className="me-2 mb-1"
              size={16}
              style={{ color: "#f6f6f6" }}
            />
            <span>Account</span>
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
          <div
            className="cart"
            style={{ cursor: "pointer",userSelect:"none" }}
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
      </div>
      <UserFilterMenu />
      <Profile
        openProfileDetails={openProfileDetails}
        handleClose={handleProfileDetailClose}
      />
    </>
  );
}

export default UserHeader;
