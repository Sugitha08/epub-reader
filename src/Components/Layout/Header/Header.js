import React, { useState } from "react";
import "./Header.css";
import { IoMdMenu } from "react-icons/io";
// import HeaderMenu from "./HeaderMenu";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Profile from "../Profile/Profile";
import UserHeader from "./UserHeader";
import PublisherHeader from "./PublisherHeader";
import CustomButton from "../../Core-Components/Button";
import MenuItems from "../../Core-Components/MenuItem";
import { useSelector } from "react-redux";
import UserFilterMenu from "./UserFilterMenu";

function Header({ setOpenMenu, openMenu }) {
  const { LoginStatus: publisherLoginStatus } = useSelector(
    (state) => state.PublisherLogin
  );
  const { UserLoginStatus } = useSelector((state) => state?.UserLogin);

  const navigate = useNavigate();
  const location = useLocation();
  const [openProfileDetails, setProfileDetails] = useState(false);
  const [signMenu, setSignMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };

  const handleSignMenuOpen = (event) => {
    setSignMenu(event.currentTarget);
  };
  const handleClose = () => {
    setSignMenu(null);
  };
  const HeaderContent = () => {
    if (publisherLoginStatus || UserLoginStatus) {
      if (UserLoginStatus) {
        return <UserHeader setProfileDetails={setProfileDetails} />;
      }
      if (publisherLoginStatus) {
        return <PublisherHeader />;
      }
    } else {
      return (
        <>
          <div className="d-flex justify-centent-center align-items-center">
            <div className="menu-icon">
              <IoMdMenu
                size={25}
                className="menu-icon me-2"
                style={{ cursor: "pointer" }}
                onClick={handleMenuOpen}
              />
            </div>
            <h3 role="button" className="title" onClick={() => navigate("/")}>
              HALO PAD READER
            </h3>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-5">
            <div
              role="button"
              className={`nav ${
                location.pathname === "/publisher/login" ? "active" : ""
              }`}
              onClick={() => {
                navigate("/publisher/login");
              }}
            >
              Publisher
            </div>
            <div
              role="button"
              className={`nav ${location.pathname === "/" ? "active" : ""}`}
              onClick={() => {
                navigate("/");
              }}
            >
              Reader
            </div>
            {/* <CustomButton
              sx={{
                backgroundColor: "transparent",
                border: "1px solid #f6f6f6",
                padding: "2px 6px",
              }}
              aria-controls={signMenu ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={signMenu ? "true" : undefined}
              onClick={handleSignMenuOpen}
            >
              Sign in/sign up
            </CustomButton>
            <MenuItems
              anchorEl={signMenu}
              open={signMenu}
              onClose={handleClose}
              listdata={[
                {
                  label: " Sign in",
                  handleClick: () => {
                    navigate("/");
                    setSignMenu(null);
                  },
                },
                {
                  label: " Sign Up",
                  handleClick: () => {
                    navigate("/register");
                    setSignMenu(null);
                  },
                },
              ]}
            /> */}
          </div>
        </>
      );
    }
  };

  return (
    <>
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
          <h3 role="button" className="title" onClick={() => navigate("/")}>
            HALO PAD READER
          </h3>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-5">
          <div
            role="button"
            className={`nav ${
              location.pathname === "/publisher/login" ? "active" : ""
            }`}
            onClick={() => {
              navigate("/publisher/login");
            }}
          >
            Publisher
          </div>
          <div
            role="button"
            className={`nav ${location.pathname === "/" ? "active" : ""}`}
            onClick={() => {
              navigate("/");
            }}
          >
            Reader
          </div>
          {/* <CustomButton
              sx={{
                backgroundColor: "transparent",
                border: "1px solid #f6f6f6",
                padding: "2px 6px",
              }}
              aria-controls={signMenu ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={signMenu ? "true" : undefined}
              onClick={handleSignMenuOpen}
            >
              Sign in/sign up
            </CustomButton>
            <MenuItems
              anchorEl={signMenu}
              open={signMenu}
              onClose={handleClose}
              listdata={[
                {
                  label: " Sign in",
                  handleClick: () => {
                    navigate("/");
                    setSignMenu(null);
                  },
                },
                {
                  label: " Sign Up",
                  handleClick: () => {
                    navigate("/register");
                    setSignMenu(null);
                  },
                },
              ]}
            /> */}
        </div>
      </div>
    </>
  );
}

export default Header;
