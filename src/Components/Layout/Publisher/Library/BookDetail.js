import React, { useEffect } from "react";
import "./Library.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LuIndianRupee } from "react-icons/lu";
import { MdStar } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { MdEditNote } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { Tooltip, IconButton } from "@mui/material";
import { FcLike } from "react-icons/fc";
import { GiOpenBook } from "react-icons/gi";
import { IoIosShareAlt } from "react-icons/io";
import { ImBooks } from "react-icons/im";
import { MdLibraryBooks } from "react-icons/md";
import { Review } from "../../../Core-Components/Highlight";
import CustomButton from "../../../Core-Components/Button";
import cover from "../../../Assets/cover3.avif";
import { useDispatch, useSelector } from "react-redux";
import { DeleteBook_Request } from "../../../../Redux/Action/PublisherAction/BookAction";
import { BookDetailPubLoading } from "../../../Core-Components/Loading";

function BookDetail() {
  const navigate = useNavigate();
  const {
    BookDetail: BookData,
    BookDeleted,
    loading,
  } = useSelector((state) => state.BookData);
  const dispatch = useDispatch();
  const handlePreviewOpen = () => {
    navigate("/publisher/bookpreview");
  };

  const handleEditBook = (BookData) => {
    navigate("/publisher/dashboard/upload", { state: { BookData } });
  };

  const handleDeleteBook = (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (isConfirmed) {
      dispatch(DeleteBook_Request(id));
    }
  };
  useEffect(() => {
    if (BookDeleted) {
      navigate("/publisher/dashboard/library");
    }
  }, [BookDeleted]);

  if (loading) {
    return <BookDetailPubLoading />;
  }
  return (
    <div
      className="row justify-content-center gap-4"
      style={{
        width: "95%",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "20px 0 30px 0",
      }}
    >
      <div className="bookDetail row shadow col-9">
        <img
          src={BookData?.Book_cover ? BookData?.Book_cover : cover}
          alt="image"
          className="col-lg-6 col-md-12 col-sm-12"
        />
        <div className="col-lg-6 col-md-12 col-sm-12 book-content">
          <div>
            <span className="tag shadow">BestSeller</span>
          </div>
          <h2>{BookData?.title}</h2>
          <p className="author-name mb-0">{BookData?.author}</p>
          <p className="mb-0">
            <span className="sub-title">Genre</span> -{" "}
            <span className="value">{BookData?.genre}</span>
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
              <del>{BookData?.price}</del>{" "}
              <LuIndianRupee
                size={16}
                className="mb-1"
                style={{ fontWeight: "bold" }}
              />
              100
            </span>
          </p>
          <p className="mb-0">
            <span className="sub-title">Rent</span> -{" "}
            <span className="value">
              <LuIndianRupee size={17} className="mb-1" />
              {BookData?.Rental_Price
                ? BookData?.Rental_Price
                : BookData?.rental_price}{" "}
              / {BookData?.Rental_duration} month
            </span>
          </p>
          <p className="mb-0">
            <span className="sub-title"> Discription</span> -{" "}
            <span className="value-dis">{BookData?.discription}</span>
          </p>
          <div className="icons">
            <Tooltip title="Preview">
              <IconButton onClick={handlePreviewOpen}>
                <FiEye size={20} style={{ color: "#5e5e5e" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit">
              <IconButton onClick={() => handleEditBook(BookData)}>
                <MdEditNote size={22} style={{ color: "#5e5e5e" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton onClick={() => handleDeleteBook(BookData?.book_id)}>
                <RiDeleteBinLine size={19} style={{ color: "#5e5e5e" }} />
              </IconButton>
            </Tooltip>
          </div>
          <div className="btn-cancel mt-2">
            <div className="d-flex justify-content-end">
              <CustomButton
                sx={{
                  backgroundColor: "#BA0E0E",
                  padding: "4px 10px",
                  fontSize: "14px",
                }}
                onClick={() => navigate("/publisher/dashboard/library")}
              >
                Cancel
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
      <div className="card earning-detail col-3 p-0 shadow">
        <div className="card-header">
          <h4 style={{ fontSize: "22px" }} className="mb-0">
            Sales & Popularity Report
          </h4>
        </div>
        <div className="card-body">
          <div>
            <p>Total Likes</p>
            <h6>
              <span>
                <FcLike className="mb-1 me-1" />
              </span>
              2000
            </h6>
          </div>
          <div>
            <p>Total Readers</p>
            <h6>
              <span>
                <GiOpenBook className="mb-1 me-1" />
              </span>
              1500
            </h6>
          </div>
          <div>
            <p>Average Rating</p>
            <h6>
              <span>
                <MdStar className="mb-1 me-1" style={{ color: "ffd700" }} />
              </span>
              4.5
            </h6>
          </div>
          <div>
            <p>User Shares</p>
            <h6>
              <span>
                <IoIosShareAlt
                  className="mb-1 me-1"
                  style={{ color: "#5b5bfe" }}
                />
              </span>
              700
            </h6>
          </div>
          <div>
            <p>Total Sold</p>
            <h6>
              <span>
                <ImBooks
                  className="mb-1 me-1"
                  style={{ color: "rgb(7 141 236)" }}
                />
              </span>
              1800
            </h6>
          </div>
          <div>
            <p>Total Rental</p>
            <h6>
              <span>
                <MdLibraryBooks
                  className="mb-1 me-1"
                  style={{ color: "rgb(154 4 127)" }}
                />
              </span>
              1500
            </h6>
          </div>
          <div>
            <p>Total Sales</p>
            <h6>
              <span>
                <LuIndianRupee size={14} />
              </span>
              20000
            </h6>
          </div>
          <div>
            <p>Total Rental sale</p>
            <h6>
              <span>
                <LuIndianRupee size={14} />
              </span>
              10000
            </h6>
          </div>
        </div>
        <div className="card-footer">
          <div className="d-flex align-items-center justify-content-between">
            <h5>Total Revenue</h5>
            <h5>
              {" "}
              <span>
                <LuIndianRupee size={18} />
              </span>
              30000
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
