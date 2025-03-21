import React, { useEffect } from "react";
import Userbanner from "../../../Assets/banner.jpg";
import { Book_list } from "../../../Datas.js";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import BookList from "../../../Core-Components/BookList.js";
import { useDispatch, useSelector } from "react-redux";
import { GetCartItem_Request } from "../../../../Redux/Action/UserAction/CartBookAction.js";
import { useOutletContext } from "react-router-dom";
import { GetUserBookbyId_Request } from "../../../../Redux/Action/UserAction/UserBookAction.js";
import { GetWishlistItem_Request } from "../../../../Redux/Action/UserAction/WishlistBookAction";

function UserDashboard() {
  const navigate = useNavigate();
  const FilteredBook = Book_list;
  const dispatch = useDispatch();
  const { setCartCount } = useOutletContext();

  const { cartItems } = useSelector((state) => state.CartBook);

  useEffect(() => {
    dispatch(GetCartItem_Request());
    dispatch(GetWishlistItem_Request());
  }, [dispatch]);

  useEffect(() => {
    setCartCount(cartItems?.length);
  }, [cartItems]);

  const handleBookOpen = (bookData) => {
    dispatch(GetUserBookbyId_Request(bookData.book_id));
    navigate(`/user/dash/explore/book`);
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
