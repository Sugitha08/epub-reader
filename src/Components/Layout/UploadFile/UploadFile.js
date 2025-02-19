import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

function UploadFile() {
  return (
    <div className="upload-container" style={{padding:"20px" , width:"80%" , marginLeft:"auto" , marginRight:"auto"}}>
      <h3 className="text-center">UPLOAD YOUR FILE</h3>
      <div className="form row g-4" style={{padding:"15px"}}>
        <div className="col-6">
        <TextField
          fullWidth
          label="Enter Your Email"
          variant="outlined"
          className="input"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          size="small"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="emd" style={{ cursor: "pointer" }}>
                  {/* <MdEmail /> */}
                </InputAdornment>
              ),
            },
          }}
        />
        </div>
        <div className="col-6">
        <TextField
          fullWidth
          label="Enter Your Email"
          variant="outlined"
          className="input"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          size="small"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="emd" style={{ cursor: "pointer" }}>
                  {/* <MdEmail /> */}
                </InputAdornment>
              ),
            },
          }}
        />
        </div>
        <div className="col-6">
        <TextField
          fullWidth
          label="Enter Your Email"
          variant="outlined"
          className="input"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          size="small"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="emd" style={{ cursor: "pointer" }}>
                  {/* <MdEmail /> */}
                </InputAdornment>
              ),
            },
          }}
        />
        </div>
        <div className="col-6">
        <TextField
          fullWidth
          label="Enter Your Email"
          variant="outlined"
          className="input"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          size="small"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="emd" style={{ cursor: "pointer" }}>
                  {/* <MdEmail /> */}
                </InputAdornment>
              ),
            },
          }}
        />
        </div>
        <div className="col-6">
        <TextField
          fullWidth
          label="Enter Your Email"
          variant="outlined"
          className="input"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          size="small"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="emd" style={{ cursor: "pointer" }}>
                  {/* <MdEmail /> */}
                </InputAdornment>
              ),
            },
          }}
        />
        </div>
        <div className="col-6">
        <TextField
          fullWidth
          label="Enter Your Email"
          variant="outlined"
          className="input"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          size="small"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="emd" style={{ cursor: "pointer" }}>
                  {/* <MdEmail /> */}
                </InputAdornment>
              ),
            },
          }}
        />
        </div>  
      </div>
    </div>
  );
}

export default UploadFile;
