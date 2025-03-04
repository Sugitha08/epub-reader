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
  const location = useLocation();

  const navigate = useNavigate();
  const [openProfileDetails, setProfileDetails] = useState(false);
  const [signMenu, setSignMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };

  const handleProfileDetailClose = () => {
    setProfileDetails(false);
  };
  const handleSignMenuOpen = (event) => {
    setSignMenu(event.currentTarget);
  };
  const handleClose = () => {
    setSignMenu(null);
  };
  const HeaderContent = () => {
    if (publisherLoginStatus) {
      if (false) {
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
              EBOOK
            </h3>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-5">
            <div
              role="button"
              className={`nav `}
              onClick={() => {
                navigate("/publisher/login");
              }}
            >
              Publisher
            </div>
            <div
              role="button"
              className={`nav`}
              onClick={() => {
                navigate("/");
              }}
            >
              User
            </div>
            <CustomButton
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
            />
          </div>
        </>
      );
    }
  };

  return (
    <>
      <div className="header">
        {HeaderContent()}
        <Profile
          openProfileDetails={openProfileDetails}
          handleClose={handleProfileDetailClose}
        />
      </div>
      {/* {publisherLoginStatus && <UserFilterMenu />} */}
    </>
  );
}

export default Header;
