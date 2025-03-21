import React, { useEffect, useState } from "react";
import "./Layout.css";
import UserHeader from "../Header/UserHeader";
import UserContent from "../Content/UserContent";
import Footer from "../Footer/Footer";

function UserLayout() {
  const [openMenu, setOpenMenu] = useState("");
  const [cartCount, setCartCount] = useState(null);

  return (
    <div className="epub-reader-wrapper">
      <UserHeader setOpenMenu={setOpenMenu} openMenu={openMenu} cartCount={cartCount}/>
      <UserContent openMenu={openMenu} setCartCount={setCartCount}/>
      <Footer />
    </div>
  );
}

export default UserLayout;
