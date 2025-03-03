import React, { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import "./UploadFile.css";
import { useNavigate } from "react-router-dom";
import NewCategory from "./NewCategory";
import { useDispatch } from "react-redux";
import { FaBook } from "react-icons/fa6";
import { Autocomplete } from "@mui/material";

function UploadFile() {
  const [openAddCategory, setOpenAddCategory] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [price, setPrice] = useState("");
  const [rental_price, setRental_price] = useState("");
  const [epubFile, setEpubFile] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAddCategory = () => {
    setOpenAddCategory(true);
  };
  const handleCategoryClose = () => {
    setOpenAddCategory(false);
  };
  const handleUploadFile = (e) => {
    e.preventDefault();
    const payload = {};
    dispatch();
  };
  return (
    <>
      <div className="upload-container shadow">
        <h3>UPLOAD YOUR FILE</h3>
        <form
          className="form row"
          style={{ padding: "15px", rowGap: "25px" }}
          onSubmit={handleUploadFile}
        >
          <div className="col-lg-6 col-sm-12 col-md-6">
            <TextField
              fullWidth
              label="Title of the Book"
              variant="outlined"
              className="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      style={{ cursor: "pointer" }}
                    >
                      <FaBook />
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
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      style={{ cursor: "pointer" }}
                    >
                      {/* <MdEmail /> */}
                    </InputAdornment>
                  ),
                },
              }}
            />
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6">
            <Autocomplete
              options={[
                { id: 1, value: "EN", label: "EN" },
                { id: 2, value: "ES", label: "ES" },
                { id: 3, value: "FR", label: "FR" },
              ]}
              disableClearable
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  label="Book Category"
                  
                />
              )}
            />
            <p
              className="mb-0"
              style={{
                fontSize: "12px",
                float: "right",
                textDecoration: "none",
                color: "rgb(13, 110, 253)",
                cursor: "pointer",
              }}
              onClick={handleAddCategory}
            >
              Add Category
            </p>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6">
            <TextField
              fullWidth
              label="Book IBSN Number"
              variant="outlined"
              className="input"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment
                      position="emd"
                      style={{ cursor: "pointer" }}
                    >
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
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment
                      position="emd"
                      style={{ cursor: "pointer" }}
                    >
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
              value={rental_price}
              onChange={(e) => setRental_price(e.target.value)}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment
                      position="emd"
                      style={{ cursor: "pointer" }}
                    >
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
              // type="file"
              label="Upload Book"
              variant="outlined"
              className="input"
              value={epubFile}
              onChange={(e) => setEpubFile(e.target.value)}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment
                      position="emd"
                      style={{ cursor: "pointer" }}
                    >
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
                    <InputAdornment
                      position="emd"
                      style={{ cursor: "pointer" }}
                    >
                      {/* <MdEmail /> */}
                    </InputAdornment>
                  ),
                },
              }}
            />
          </div>
          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-danger mx-3 shadow"
              onClick={() => navigate("/publisher/dashboard")}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-success shadow">
              Submit
            </button>
          </div>
        </form>
      </div>
      <NewCategory
        handleCategoryClose={handleCategoryClose}
        openAddCategory={openAddCategory}
      />
    </>
  );
}

export default UploadFile;
