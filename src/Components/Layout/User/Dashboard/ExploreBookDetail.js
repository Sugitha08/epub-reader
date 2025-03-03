import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LuIndianRupee } from "react-icons/lu";
import { FiEye } from "react-icons/fi";
import { MdEditNote } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa6";
import "./UserDash.css";
import CustomButton from "../../../Core-Components/Button";
import { Tooltip, IconButton } from "@mui/material";
import { Review } from "../../../Core-Components/Highlight";
import { ImCross } from "react-icons/im";

function ExploreBookDetail() {
  const location = useLocation();
  const navigate = useNavigate()

  const BookData = location.state;
  console.log(BookData);

  return (
    <>
      <div className="userbookDetail row shadow">
        <div className="d-flex justify-content-end p-0">
          <Tooltip title="cancel">
            <IconButton>
              <ImCross size={"10px"} style={{ color: "rgb(149 149 149)" }} onClick={()=>navigate("/user/dash/explore")}/>
            </IconButton>
          </Tooltip>
        </div>
        <img
          src={BookData?.Book_cover}
          alt="image"
          className="col-lg-6 col-md-12 col-sm-12"
        />
        <div className="col-lg-6 col-md-12 col-sm-12 book-content">
          <div className="d-flex justify-content-between">
            <span className="tag shadow">BestSeller</span>
            <span>
              <FaHeart
                size={18}
                style={{ color: "grey" }}
                className="like-icon"
              />
            </span>
          </div>
          <h2>{BookData?.Book_title}</h2>
          <p className="author-name mb-0">{BookData?.Book_Author}</p>
          <p className="mb-0">
            <span className="sub-title">Genre</span> -{" "}
            <span className="value">{BookData?.Book_Genre}</span>
          </p>
          <Review />
          <p className="mb-0">
            <span className="sub-title">Price</span> -
            <span className="value">
              {" "}
              <LuIndianRupee
                size={16}
                className="mb-1"
                style={{ fontWeight: "bold" }}
              />
              {BookData?.Book_Price}
            </span>
          </p>
          <p className="mb-0">
            <span className="sub-title">Rent</span> -{" "}
            <span className="value">
              <LuIndianRupee size={17} className="mb-1" />
              {BookData?.Rental_Price} / {BookData?.Rental_duration} month
            </span>
          </p>
          <p className="mb-0">
            <span className="sub-title"> Discription</span> -{" "}
            <span className="value-dis">{BookData?.discription}</span>
          </p>
          <div className="icons">
            <Tooltip title="Preview">
              <IconButton>
                <FiEye size={20} style={{ color: "#5e5e5e" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit">
              <IconButton>
                <MdEditNote size={22} style={{ color: "#5e5e5e" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete" placement="right-start">
              <IconButton>
                <RiDeleteBinLine size={19} style={{ color: "#5e5e5e" }} />
              </IconButton>
            </Tooltip>
          </div>
          <div className="action-btn mt-2 ms-auto">
            <CustomButton
              className="mx-1"
              sx={{
                backgroundColor: "#1c6eb2",
                padding: "6px 12px",
                fontSize: "14px",
              }}
            >
              ADD TO CART
            </CustomButton>
            <CustomButton
              className="mx-1"
              sx={{
                backgroundColor: "#098446",
                padding: "6px 12px",
                fontSize: "14px",
              }}
              onClick={() => navigate("/user/dash/detail/order/summary")}
            >
              Buy Now
            </CustomButton>
            <CustomButton
              className="mx-1"
              sx={{
                backgroundColor: "#63af27",
                padding: "6px 12px",
                fontSize: "14px",
              }}
              onClick={() => navigate("/user/dash/detail/order/summary")}
            >
              Rent Now
            </CustomButton>
          </div>
        </div>
      </div>
      <div className="recommadation"></div>
    </>
  );
}

export default ExploreBookDetail;
