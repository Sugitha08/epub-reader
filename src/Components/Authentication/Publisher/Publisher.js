import React, { useState } from "react";
import vector from "../../Assets/vector.jpg";
import "./Publisher.css";
import PublisherLogin from "./PublisherAuth/PublisherLogin";
import PublisherReg from "./PublisherReg/PublisherReg";

function Publisher() {
  const [showLoginPage, setShowLoginPage] = useState(true);
  return (
    <>
      <div className="container">
        <div className="row login-container">
          <div className="col-6 ">
            <img
              src={vector}
              alt="Vector"
              style={{ width: "600px", height: "922" }}
            />
          </div>
          <div className="col-6">
            <div className="login-wrapper">
              {showLoginPage ? (
                <PublisherLogin setShowLoginPage={setShowLoginPage} />
              ) : (
                <PublisherReg setShowLoginPage={setShowLoginPage} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Publisher;
