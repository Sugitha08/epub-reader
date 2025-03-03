import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import "./Layout.css";
import Footer from "./Footer/Footer";
import UserFilterMenu from "./Header/UserFilterMenu";
import Content from "./Content/Content";


function Layout({ LoginStatus }) {
  const [openMenu, setOpenMenu] = useState(false);
  console.log(LoginStatus);

  return (
    <div className="epub-reader-wrapper">
      <Header
        setOpenMenu={setOpenMenu}
        openMenu={openMenu}
        UserLogin={LoginStatus}
      />
      {LoginStatus?.Role === "User" && <UserFilterMenu />}
      <Content openMenu={openMenu} LoginStatus={LoginStatus} />
      <Footer LoginStatus={LoginStatus} />
    </div>
  );
}

export default Layout;
