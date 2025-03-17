import React, { useEffect, useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import "./UploadFile.css";
import { useNavigate } from "react-router-dom";
import NewCategory from "./NewCategory";
import { useDispatch, useSelector } from "react-redux";
import { FaBook } from "react-icons/fa6";
import { Autocomplete } from "@mui/material";
import { Upload_book_Request } from "../../../../Redux/Action/PublisherAction/BookAction";
import { Get_Cat_Request } from "../../../../Redux/Action/PublisherAction/CategoryAction";
import CustomButton from "../../../Core-Components/Button";

function UploadFile() {
  const [openAddCategory, setOpenAddCategory] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isbn, setIsbn] = useState("");
  const [price, setPrice] = useState("");
  const [rental_price, setRental_price] = useState("");
  const [epubFile, setEpubFile] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { Category } = useSelector((state) => state.category);
  const handleAddCategory = () => {
    setOpenAddCategory(true);
  };
  const handleCategoryClose = () => {
    setOpenAddCategory(false);
  };
  const handleUploadFile = (e) => {
    e.preventDefault();
    const payload = {};
    // dispatch(Upload_book_Request());
  };

  useEffect(() => {
    dispatch(Get_Cat_Request());
  }, []);

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
                      {/* <FaBook /> */}
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
              options={Category?.map((cat) => ({
                id: cat.category_id,
                value: cat.category_id,
                label: cat.category_name,
              }))}
              // disableClearable
              value={selectedCategory}
              onChange={(event, newValue) => setSelectedCategory(newValue)}
              renderInput={(params) => (
                <TextField {...params} fullWidth label="Book Category" />
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
                      <CustomButton
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        sx={{
                          padding: "3px 10px",
                          fontSize: "14px",
                          backgroundColor: "#858484",
                        }}
                        // startIcon={<CloudUploadIcon />}
                      >
                        Upload files
                        <input
                          type="file"
                          hidden
                          onChange={(event) => console.log(event.target.files)}
                          multiple
                        />
                      </CustomButton>
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
            <CustomButton
              type="button"
              className="mx-3 shadow"
              style={{ backgroundColor: "#BA0E0E" }}
              onClick={() => navigate("/publisher/dashboard")}
            >
              Cancel
            </CustomButton>
            <CustomButton
              type="submit"
              className="shadow"
              style={{ backgroundColor: "green" }}
              onClick={() => navigate("/publisher/dashboard")}
            >
              Submit
            </CustomButton>
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
