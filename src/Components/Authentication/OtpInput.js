import React, { useState } from "react";
import { InputOtp } from "primereact/inputotp";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-blue/theme.css"; 

function OtpInput({ otpValue, setOtpValue }) {
  return (
    <div className="flex justify-content-center">
      <InputOtp value={otpValue} onChange={(e) => setOtpValue(e.value)} />
    </div>
  );
}

export default OtpInput;
