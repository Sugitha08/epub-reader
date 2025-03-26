import React from "react";
import "../UserDetails/UserDetail.css";
import { Review } from "../../../Core-Components/Highlight";
import { LuIndianRupee } from "react-icons/lu";
import "./Library.css";
import { UserLibraryLoading } from "../../../Core-Components/Loading";
import { useSelector } from "react-redux";

function ProductList({ title, Book_list, children, Footer }) {
  const { loading: WishlistLoading } = useSelector(
    (state) => state.WishlistBook
  );
  const { loading: CartLoading } = useSelector((state) => state.CartBook);
  const { loading: ParchaseLoading } = useSelector(
    (state) => state.PurchasedBook
  );

  if (WishlistLoading || CartLoading || ParchaseLoading) {
    return <UserLibraryLoading />;
  }

  return (
    <div className="user-wishlist cardBox" style={{ height: "100%" }}>
      <h4>{title}</h4>
      <div className="wishbook-list card-body p-0">
        {Book_list && Book_list.length > 0 ? (
          Book_list?.map((book, index) => (
            <div
              className="cardBox wish-book"
              style={{ padding: "5px 20px" }}
              key={index}
            >
              <div className="row justify-content-center">
                <div className="col-2">
                  <img src={book?.Book_cover} width="100px" />
                </div>
                <div
                  className="col-5 d-flex flex-column"
                  style={{ rowGap: "10px" }}
                >
                  <div className="d-flex align-items-center">
                    <h4 className="mb-0">{book?.title}</h4>
                    <h5 className="mb-0 mt-1" style={{ color: "#5e5e5e" }}>
                      - {book?.author}
                    </h5>
                  </div>
                  <div>
                    <h6 className="mb-0" style={{ color: "#5e5e5e" }}>
                      {book?.genre}
                    </h6>
                  </div>
                  <Review />
                  {book?.price && (
                    <h5 className="mb-0">
                      <LuIndianRupee
                        size={16}
                        className="mb-1"
                        style={{ fontWeight: "bold" }}
                      />
                      {book?.price}
                    </h5>
                  )}
                </div>
                <div className="col-5">
                  {children &&
                    children(book.wishlist_id || book.cart_id || book)}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
            <p>Items Not Available</p>
          </div>
        )}
      </div>
      {Footer && Footer}
    </div>
  );
}

export default ProductList;
