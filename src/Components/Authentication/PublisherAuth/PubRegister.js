import React from "react";
import Register from "../Register";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Publisher_Register_Request } from "../../../Redux/Action/PublisherAction/PuAuthAction";

function PubRegister() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavToPubLogin = () => {
    navigate("/publisher/login");
  };

  const PubLRegAction = (payload) => {
    dispatch(Publisher_Register_Request(payload));
  };

  return (
    <Register redirectTologin={handleNavToPubLogin} handleReg={PubLRegAction} />
  );
}

export default PubRegister;
