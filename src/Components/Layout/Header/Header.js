import React, { useEffect, useState } from "react";
import "./Header.css";
import { IoMdMenu } from "react-icons/io";
import { useNavigate,useLocation } from "react-router-dom";

function Header({ setOpenMenu, openMenu }) {

  const navigate = useNavigate();
  const location = useLocation();
  const [signMenu, setSignMenu] = useState(false);
  const [Active, setActive] = useState();

  useEffect(() => {
    if (location.pathname.startsWith("/publisher")) {
      setActive("Publisher");
    } else{
      setActive("User")
    }
  }, [location.pathname]);



  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };

  const handleSignMenuOpen = (event) => {
    setSignMenu(event.currentTarget);
  };
  const handleClose = () => {
    setSignMenu(null);
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
            className={`nav ${Active === "Publisher" ? "active" : ""}`}
            onClick={() => {
              setActive("Publisher");
              navigate("/publisher/login");
            }}
          >
            Publisher
          </div>
          <div
            role="button"
            className={`nav ${
              Active === "User" ? "active" : ""
            } ? "active" : ""}`}
            onClick={() => {
              setActive("User");
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
