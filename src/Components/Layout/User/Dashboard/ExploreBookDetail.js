import React from "react";
import { useLocation } from "react-router-dom";
import { LuIndianRupee } from "react-icons/lu";
import { MdStar } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { MdEditNote } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa6";
import "./UserDash.css";
import CustomButton from "../../../Core-Components/Button";

function ExploreBookDetail() {
  const location = useLocation();

  const BookData = location.state;
  console.log(BookData);

  return (
    <>
    <div className="userbookDetail row shadow">
      <img
        src={BookData?.Book_cover}
        alt="image"
        className="col-lg-6 col-md-12 col-sm-12"
      />
      <div className="col-lg-6 col-md-12 col-sm-12 book-content">
        <div className="d-flex justify-content-between">
          <span className="tag shadow">BestSeller</span>
          <span>
            <FaHeart size={18} style={{ color: "grey" }} />
          </span>
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
          <p className="mb-0 ms-2"> ( 1200 )</p>
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
        <div className="action-btn mt-2 ms-auto">
          <CustomButton className="mx-2">ADD TO CART</CustomButton>
          <CustomButton className="mx-2">Buy Now</CustomButton>
          <CustomButton className="mx-2">Rent Now</CustomButton>
        </div>
      </div>
    </div>
    <div className="recommadation">

    </div>
    </>
  );
}

export default ExploreBookDetail;
