import React from "react";
import "./Library.css";
import { useLocation } from "react-router-dom";
import { LuIndianRupee } from "react-icons/lu";
import { MdStar } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { MdEditNote } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

function BookDetail() {
  const location = useLocation();

  const BookData = location.state;
  console.log(BookData);

  return (
    <div className="bookDetail row shadow">
      <img
        src={BookData?.Book_cover}
        alt="image"
        className="col-lg-6 col-md-12 col-sm-12"
      />
      <div className="col-lg-6 col-md-12 col-sm-12 book-content">
        <div>
          <span className="tag shadow">BestSeller</span>
        </div>
        <h2>{BookData?.Book_title}</h2>
        <p className="author-name">{BookData?.Book_Author}</p>
        <p className="book_genre">
          Genre - <span className="value">{BookData?.Book_Genre}</span>
        </p>
        <div className="review d-flex">
          <span>
            4 <MdStar size={18} />
          </span>
          <p>( 1200 )</p>
        </div>
        <p className="O-price">
          <LuIndianRupee
            size={21}
            className="mb-1"
            style={{ fontWeight: "bold" }}
          />
          {BookData?.Book_Price}
        </p>
        <p className="price">
          Rent -
          <span className="value">
            <LuIndianRupee size={17} className="mb-1" />
            {BookData?.Rental_Price} / {BookData?.Rental_duration} month
          </span>
        </p>
        <p className="discription">
          discription - <span className="value">{BookData?.discription}</span>
        </p>
        <div className="icons">
          <FiEye size={20} />
          <MdEditNote size={22} />
          <RiDeleteBinLine size={19} />
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
