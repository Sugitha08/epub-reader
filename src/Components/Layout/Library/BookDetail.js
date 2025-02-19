import React from "react";
import "./Library.css";
import { useLocation } from "react-router-dom";

function BookDetail() {
  const location = useLocation();

  const BookData = location.state;
  console.log(BookData);

  return (
    <div className="bookDetail row">
      <div className="col-6">
        <img src={BookData?.Book_cover} alt="image" />
      </div>
      <div className="col-6 book-content">
        <h1>{BookData?.Book_title}</h1>
        <p className="author-name">{BookData?.Book_Author}</p>
        <p className="book_genre">{BookData?.Book_Genre}</p>
        <p className="price">
          Price - <span>{BookData?.Book_Price}</span>
        </p>
        <p className="price">
          Rental Price -{" "}
          <span>
            {BookData?.Rental_Price} / {BookData?.Rental_duration}
            months
          </span>
        </p>
        <p className="discription">{BookData?.discription}</p>
      </div>
    </div>
  );
}

export default BookDetail;
