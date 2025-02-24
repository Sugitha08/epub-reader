import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import "./UploadFile.css";

function UploadFile() {
  return (
    <div className="upload-container shadow">
      <h3>UPLOAD YOUR FILE</h3>
      <div className="form row" style={{ padding: "15px", rowGap: "25px" }}>
        <div className="col-lg-6 col-sm-12 col-md-6">
          <TextField
            fullWidth
            label="Title of the Book"
            variant="outlined"
            className="input"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
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
        <div className="col-lg-6 col-sm-12 col-md-6">
          <TextField
            fullWidth
            label="Author Name"
            variant="outlined"
            className="input"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
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
        <div className="col-lg-6 col-sm-12 col-md-6">
          <TextField
            fullWidth
            label="Book Genre"
            variant="outlined"
            className="input"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
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
        <div className="col-lg-6 col-sm-12 col-md-6">
          <TextField
            fullWidth
            label="Book IBSN Number"
            variant="outlined"
            className="input"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
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
        <div className="col-lg-6 col-sm-12 col-md-6">
          <TextField
            fullWidth
            label="Price"
            variant="outlined"
            className="input"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
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
        <div className="col-lg-6 col-sm-12 col-md-6">
          <TextField
            fullWidth
            label="Rental Price"
            variant="outlined"
            className="input"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
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
        <div className="col-12">
          <TextField
            fullWidth
            label="Upload Book"
            variant="outlined"
            className="input"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
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
        <div className="col-12">
          <TextField
            fullWidth
            multiline
            rows={2}
            label="Book Discription"
            variant="outlined"
            className="input"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
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
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-danger mx-3 shadow">
            Cancel
          </button>
          <button type="button" className="btn btn-success shadow">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadFile;
