import React from "react";
import { LuIndianRupee } from "react-icons/lu";
import CardComponent from "./Card.js";
import { Review } from "./Highlight.js";
import "./BookList.css";
import { FaHeart } from "react-icons/fa6";

function BookList({ FilteredBook, handleBookOpen }) {
  return (
    <div className="Book-list row">
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
                <FaHeart size={18} className="like-icon" />
              </span>
            </div>
            <img src={book?.Book_cover} className="book-img" />
            <h5 className="mt-2 title">{book?.Book_title}</h5>
            <h6 className="author-name">{book?.Book_Author}</h6>
            <h5>
              <LuIndianRupee />
              <del>{book?.Book_Price}</del>&nbsp;
              <LuIndianRupee size={16} className="mb-1" />
              100
            </h5>
            <Review />
          </CardComponent>
        </div>
      ))}
    </div>
  );
}

export default BookList;
