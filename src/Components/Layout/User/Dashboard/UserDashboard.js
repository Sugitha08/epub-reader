import React from "react";
import Userbanner from "../../../Assets/userbanner.png";
import { Book_list } from "../../../Datas.js";
import CardComponent from "../../../Core-Components/Card.js";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import { MdStar } from "react-icons/md";

function UserDashboard() {
  const FilteredBook = Book_list;

  const handleBookOpen = (bookData) => {
    // navigate(`/publisher/dashboard/upload/book/${bookData.id}`, {
    //   state: bookData,
    // });
  };
  return (
    <>
      <div className="publisher-dashboard">
        <div className="user-banner">
          <img src={Userbanner} />
        </div>
        <div className="explore-book shadow row">
          <div className="d-flex justify-content-between">
            <h4>Explore Books</h4>
            <Link to="/user/dash/explore">View All</Link>
          </div>
          {FilteredBook?.slice(0, 4)?.map((book) => (
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
                    <FaHeart size={18} style={{ color: "grey" }} />
                  </span>
                </div>
                <img src={book?.Book_cover} className="book-img" />
                <h5 className="mt-2 title">{book?.Book_title}</h5>
                <h6 className="author-name">{book?.Book_Author}</h6>
                <div className="review d-flex">
                  <span>
                    4 <MdStar size={18} />
                  </span>
                  <p className="ms-2">( 1200 )</p>
                </div>
              </CardComponent>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
