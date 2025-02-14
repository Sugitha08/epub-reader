import React from "react";
import TextField from "@mui/material/TextField";

function InputField() {
  return (
    <>
      <TextField label="Enter Your Email" variant="outlined" className="input-field" sx={{width:"500px" , height:"65px"}} />
    </>
  );
}

export default InputField;
