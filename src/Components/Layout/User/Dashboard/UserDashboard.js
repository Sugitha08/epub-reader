import React from "react";
import Userbanner from "../../../Assets/banner.jpg";
import { Book_list } from "../../../Datas.js";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import BookList from "../../../Core-Components/BookList.js";

function UserDashboard() {
  const navigate = useNavigate();
  const FilteredBook = Book_list;

  const handleBookOpen = (bookData) => {
    navigate(`/user/dash/explore/book/${bookData.id}`, {
      state: bookData,
    });
  };
  return (
    <>
      <div className="publisher-dashboard">
        <div className="user-banner">
          <img src={Userbanner} width="100%" />
        </div>
        <div className="explore-book shadow row">
          <div className="d-flex justify-content-between">
            <h4>Explore Books</h4>
            <Link to="/user/dash/explore" style={{ textDecoration: "none" }}>
              View All
              <FaArrowRight size={16} className="ms-1 mb-1" />
            </Link>
          </div>
          <BookList
            FilteredBook={FilteredBook?.slice(0, 4)}
            handleBookOpen={handleBookOpen}
          />
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
