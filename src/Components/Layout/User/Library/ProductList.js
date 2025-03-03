import React from "react";
import "../UserDetails/UserDetail.css";
import { Review } from "../../../Core-Components/Highlight";
import { LuIndianRupee } from "react-icons/lu";
import "./Library.css"

function ProductList({ title, Book_list, children, Footer }) {
  console.log(title, children);

  return (
    <div className="user-wishlist cardBox" style={{ height: "100%" }}>
      <h4>{title}</h4>
      <div className="wishbook-list card-body p-0">
        {Book_list?.slice(0, 2)?.map((book) => (
          <div className="cardBox wish-book" style={{ padding: "5px 20px" }}>
            <div className="row justify-content-center">
              <div className="col-2">
                <img src={book?.Book_cover} width="100px" />
              </div>
              <div
                className="col-5 d-flex flex-column"
                style={{ rowGap: "10px" }}
              >
                <div className="d-flex align-items-center">
                  <h4 className="mb-0">{book?.Book_title}</h4>
                  <h5 className="mb-0 mt-1" style={{ color: "#5e5e5e" }}>
                    - {book?.Book_Author}
                  </h5>
                </div>
                <div>
                  <h6 className="mb-0" style={{ color: "#5e5e5e" }}>
                    {book?.Book_Genre}
                  </h6>
                </div>
                <Review />
                <h5 className="mb-0">
                  <LuIndianRupee
                    size={16}
                    className="mb-1"
                    style={{ fontWeight: "bold" }}
                  />
                  {book?.Book_Price}
                </h5>
              </div>
              <div className="col-5">{children}</div>
            </div>
          </div>
        ))}
      </div>
      {Footer && Footer}
    </div>
  );
}

export default ProductList;
