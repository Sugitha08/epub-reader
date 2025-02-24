import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { InputAdornment, TextField } from "@mui/material";
import { CiSearch } from "react-icons/ci";

function HeaderMenu({ UserLogin }) {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const MenuItems = () => {
    if (UserLogin) {
      if (UserLogin?.Role === "User") {
        return (
          <div className="userHeader">
            <TextField
              placeholder="Search by Title , Author , Genre and more..."
              // variant="outlined"
              className=""
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              size="small"
              sx={{
                backgroundColor: "white",
                borderRadius: "5px",
                width: "500px",
                height: "38px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  "& fieldset": { border: "none" }, // Remove border
                },
              }}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      style={{ cursor: "pointer" }}
                    >
                      <CiSearch size={22} />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </div>
        );
      } else if (UserLogin?.Role === "Publisher") {
        return (
          <div className="navbar">
            <Link
              to="/publisher/dashboard"
              className={`nav ${
                location.pathname === "/publisher/dashboard/" ? "active" : ""
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
