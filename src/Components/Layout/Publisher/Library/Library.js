import React, { useState } from "react";
import { Book_list } from "../../../Datas.js";
import "./Library.css";
import { InputAdornment, TextField } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { IoFilterSharp } from "react-icons/io5";
import CategoryDrawer from "./CategoryDrawer.js";
import BookList from "../../../Core-Components/BookList.js";
import { IoChevronBack } from "react-icons/io5";

function Library() {
  const [searchBook, setSearchBook] = useState("");
  const [catFilter, setCatFilter] = useState(false);
  const navigate = useNavigate();
  const FilteredBook = Book_list.filter(
    (book) =>
      book?.Book_title.toLowerCase().includes(searchBook.toLowerCase()) ||
      book?.Book_Author.toLowerCase().includes(searchBook.toLowerCase()) ||
      book?.Book_Genre.toLowerCase().includes(searchBook.toLowerCase())
  );

  const handleBookOpen = (bookData) => {
    navigate(`/publisher/dashboard/upload/book/${bookData.id}`, {
      state: bookData,
    });
  };
  const handleCatFilterDrawer = () => {
    setCatFilter(true);
  };
  const handleCatFilterDrawerClose = () => {
    setCatFilter(false);
  };

  return (
    <>
    <span>
          <Link
            to="/publisher/dashboard"
            className="mb-2"
            style={{ textDecoration: "none", fontSize: "19px" }}
          >
            <IoChevronBack className="mb-1 ms-2" />
            Back
          </Link>
        </span>
      <div className="library-container">
        
        <div className="publish-header library-header">
          <h4 className="mb-0">My Library</h4>
          <TextField
            placeholder="Search by Title , Author , Genre and more..."
            // variant="outlined"
            className="input"
            value={searchBook}
            onChange={(e) => setSearchBook(e.target.value)}
            size="small"
            sx={{ width: "400px", backgroundColor: "#f6f6f6" }}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end" style={{ cursor: "pointer" }}>
                    <CiSearch size={22} />
                  </InputAdornment>
                ),
              },
            }}
          />
          <div>
            <IoFilterSharp
              size={22}
              role="button"
              onClick={handleCatFilterDrawer}
            />
          </div>
          {/* <button className="btn btn-success">AddNew</button> */}
        </div>
        <BookList FilteredBook={FilteredBook} handleBookOpen={handleBookOpen} />
      </div>
      <CategoryDrawer
        catFilter={catFilter}
        handleCatFilterDrawerClose={handleCatFilterDrawerClose}
      />
    </>
  );
}

export default Library;
