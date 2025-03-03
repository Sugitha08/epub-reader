import React, { useState } from "react";
import { Book_list } from "../../../Datas.js";
import { InputAdornment, TextField } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import "./UserDash.css";
import BookList from "../../../Core-Components/BookList.js";

function ExploreBook() {
  const FilteredBook = Book_list;
  const [searchBook, setSearchBook] = useState("");
  const navigate = useNavigate();

  const handleBookOpen = (bookData) => {
    navigate(`/user/dash/explore/book/${bookData.id}`, {
      state: bookData,
    });
  };
  return (
    <div className="allBooks row">
      <div className="d-flex justify-content-between">
        <h4>Explore Books</h4>
        <TextField
          placeholder="Search by Title , Author , Genre and more..."
          className="input"
          value={searchBook}
          onChange={(e) => setSearchBook(e.target.value)}
          size="small"
          sx={{ width: "500px" }}
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
      </div>
      <BookList FilteredBook={FilteredBook} handleBookOpen={handleBookOpen} />
    </div>
  );
}

export default ExploreBook;
