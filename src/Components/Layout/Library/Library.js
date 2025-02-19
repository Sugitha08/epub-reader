import React, { useState } from "react";
import { Book_list } from "../../Datas.js";
import CardComponent from "../../Core-Components/Card.js";
import "./Library.css";
import { LuIndianRupee } from "react-icons/lu";
import { InputAdornment, TextField } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

function Library() {
  const [searchBook, setSearchBook] = useState("");
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

  return (
    <div className="library-container">
      <div className="dash-header d-flex justify-content-between align-items-center">
        <h4 className="mb-0">My Library</h4>
        <TextField
          placeholder="Search by Title , Author , Genre and more..."
          // variant="outlined"
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
      <div className="Book-list mt-4">
        {FilteredBook?.map((book) => (
          <div role="button" onClick={() => handleBookOpen(book)}>
            <CardComponent style={{ width: "260px" }}>
              <img src={book?.Book_cover} className="book-img" />
              <h6 className="mt-2">{book?.Book_title}</h6>
              <h6 className="author-name">{book?.Book_Author}</h6>
              <p className="mb-1">{book?.Book_Genre}</p>
              <p className="mb-1">{book?.Language}</p>
              <h6>
                <LuIndianRupee />
                {book?.Book_Price}
              </h6>
              <h6>
                <LuIndianRupee />
                {book?.Rental_Price}
                <span style={{ fontSize: "14px", color: "#9d9fa3" }}>
                  /per month
                </span>
              </h6>
            </CardComponent>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Library;
