import React from "react";
import "../UserDetails/UserDetail.css";
import { Book_list } from "../../../Datas";
import { Review } from "../../../Core-Components/Highlight";
import { LuIndianRupee } from "react-icons/lu";
import CustomButton from "../../../Core-Components/Button";
import { RiDeleteBinLine } from "react-icons/ri";

function Wishlist() {
  return (
    <div className="user-wishlist card" style={{height:"100%"}}>
      <div>
        <h4>My Wishlist</h4>
      </div>
      <div className="wishbook-list">
        {Book_list?.slice(0, 2)?.map((book) => (
          <div className="card wish-book" style={{padding:"5px 20px"}}>
            <div className="row justify-content-center">
              <div className="col-2">
                <img src={book?.Book_cover} width="100px" />
              </div>
              <div
                className="col-6 d-flex flex-column"
                style={{ rowGap: "10px" }}
              >
                <div className="d-flex align-items-center">
                  <h4 className="mb-0">{book?.Book_title}</h4>
                  <span className="mb-0"> - {book?.Book_Author}</span>
                </div>
                <div>
                  <p className="mb-0">{book?.Book_Genre}</p>
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
              <div className="col-4 d-flex flex-column justify-content-between ">
                <div className="text-end">
                  <RiDeleteBinLine size={19} />
                </div>
                <div className="d-flex justify-content-end mb-2">
                  <CustomButton className="mx-2">Buy Now</CustomButton>
                  <CustomButton>Rent Now</CustomButton>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
