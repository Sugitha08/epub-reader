import React from "react";
import { LuIndianRupee } from "react-icons/lu";
import CardComponent from "./Card.js";
import { Review } from "./Highlight.js";
import "./BookList.css";
import coverImg from "../Assets/cover1.avif";
import { FaHeart } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddtoWishlist_Request } from "../../Redux/Action/UserAction/WishlistBookAction.js";
import { BookListLoading } from "./Loading.js";

function BookList({ FilteredBook, handleBookOpen, BookLoading }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const { wishlistItems } = useSelector((state) => state.WishlistBook);

  const handleAddWishlist = (BookId) => {
    dispatch(AddtoWishlist_Request({ book_id: BookId }));
  };

  if (BookLoading) {
    return <BookListLoading />;
  }

  return (
    <div className="Book-list row">
      {FilteredBook?.length > 0 ? (
        FilteredBook?.map((book) => (
          <div key={book.book_id} className="col-lg-3 col-sm-12 col-md-6">
            <CardComponent
              className="books"
              style={{ width: "100%", height: "100%" }}
            >
              <div className="mb-3 d-flex justify-content-between">
                <div>
                  {book?.Bestsell ? (
                    <span className="tag shadow">BestSeller</span>
                  ) : (
                    ""
                  )}
                </div>
                {location.pathname.startsWith("/user") ? (
                  <div role="button">
                    <FaHeart
                      size={18}
                      className={`like-icon ${
                        wishlistItems?.some(
                          (liked) => liked.book_id === book.book_id
                        )
                          ? "active"
                          : ""
                      }`}
                      onClick={() => handleAddWishlist(book.book_id)}
                    />
                  </div>
                ) : (
                  ""
                )}
                {location.pathname.startsWith("/publisher") ? (
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: `${
                        book.status === "live"
                          ? "#4bb14b"
                          : book.status === "pending"
                          ? "#d01110"
                          : ""
                      }`,
                    }}
                  ></div>
                ) : (
                  ""
                )}
              </div>
              <div role="button" onClick={() => handleBookOpen(book)}>
                <img
                  src={book?.Book_cover ? book?.Book_cover : coverImg}
                  className="book-img"
                />
                <h5 className="mt-2 title">{book?.title}</h5>
                <h6 className="author-name">{book?.author}</h6>
                {book?.offer_price !== "None" ? (
                  <h5>
                    <LuIndianRupee />
                    <del>{book?.price}</del>&nbsp;
                    <LuIndianRupee size={16} className="mb-1" />
                    <span>{book.offer_price}</span>
                  </h5>
                ) : (
                  <>
                    <h5>
                      <LuIndianRupee size={16} className="mb-1" />
                      <span>{book.price}</span>
                    </h5>
                  </>
                )}
                <Review />
              </div>
            </CardComponent>
          </div>
        ))
      ) : (
        <div>Items Not Found</div>
      )}
    </div>
  );
}

export default BookList;
