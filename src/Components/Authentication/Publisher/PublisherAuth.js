import React, { useState } from "react";
import vector from "../../Assets/vector.jpg";
import "./PublisherAuth.css";
import PublisherLogin from "./PublisherAuth/PublisherLogin";
import PublisherReg from "./PublisherReg/PublisherReg";

function PublisherAuth({setLoginStatus}) {
  const [showLoginPage, setShowLoginPage] = useState(true);
  return (
    <>
      <div className="row auth-container">
        <div className="col-sm-12 col-md-6 col-lg-6 vector-img">
          <img src={vector} alt="Vector" style={{ width: "100%" }} />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 login-wrapper">
          {showLoginPage ? (
            <PublisherLogin setShowLoginPage={setShowLoginPage} setLoginStatus={setLoginStatus} />
          ) : (
            <PublisherReg setShowLoginPage={setShowLoginPage} />
          )}
        </div>
      </div>
    </>
  );
}

export default PublisherAuth;
