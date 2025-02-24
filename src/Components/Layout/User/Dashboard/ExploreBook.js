import React, { useState } from "react";
import { FaHeart } from "react-icons/fa6";

import CardComponent from "../../../Core-Components/Card.js";
import { Book_list } from "../../../Datas.js";
import { InputAdornment, TextField } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import { LuIndianRupee } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import "./UserDash.css";
import { Review } from "../../../Core-Components/Highlight.js";

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
      {FilteredBook?.map((book) => (
        <div
          role="button"
          onClick={() => handleBookOpen(book)}
          className="col-lg-3 col-sm-12 col-md-6"
        >
          <CardComponent
            className="books"
            style={{ width: "100%", height: "100%" }}
          >
            <div className="mb-3 d-flex justify-content-between">
              <span className="tag shadow">BestSeller</span>
              <span>
                <FaHeart size={18} style={{ color: "grey" }} />
              </span>
            </div>
            <img src={book?.Book_cover} className="book-img" />
            <h5 className="mt-2 title">{book?.Book_title}</h5>
            <h6 className="author-name">{book?.Book_Author}</h6>
            <h5>
              <LuIndianRupee size={18} className="mb-1" />
              {book?.Book_Price}
            </h5>
            <Review/>
            {/* <div className="review d-flex">
              <span>
                4 <MdStar size={18} />
              </span>
              <p className="ms-2">( 1200 )</p>
            </div> */}
          </CardComponent>
        </div>
      ))}
    </div>
  );
}

export default ExploreBook;
