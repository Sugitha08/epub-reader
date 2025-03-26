import React, { useEffect, useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import "../Dashboard/UserDash.css";
import BookList from "../../../Core-Components/BookList.js";
import { IoChevronBack } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  GetUserBook_Request,
  GetUserBookbyId_Request,
} from "../../../../Redux/Action/UserAction/UserBookAction.js";
import { BookListLoading } from "../../../Core-Components/Loading.js";

function ExploreBook() {
  const [searchBook, setSearchBook] = useState("");
  const [Book_list, setBook_List] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");
  const location = useLocation();
  const publisher = location.state;
  const {
    UserBooks,
    loading: BookLoading,
    FilteredBook: FilterBook,
  } = useSelector((state) => state.UserBook);
  useEffect(() => {
    dispatch(GetUserBook_Request());
  }, [dispatch]);

  useEffect(() => {
    if (FilterBook.length > 0) {
      setBook_List(FilterBook);
    } else {
      setBook_List(UserBooks);
    }
  }, [UserBooks, FilterBook]);

  const FilteredBook = searchQuery
    ? Book_list?.filter((book) => book.title === searchQuery)
    : Book_list;

  const handleBookOpen = (bookData) => {
    dispatch(GetUserBookbyId_Request(bookData.book_id));
    navigate(`/user/dash/explore/book`);
  };

  return (
    <>
      <Link
        to="/user/dashboard"
        className="mb-2 ms-5"
        style={{ textDecoration: "none", fontSize: "19px" }}
      >
        <IoChevronBack className="mb-1 ms-2" />
        Back
      </Link>
      <div className="allBooks row">
        <div className="d-flex justify-content-between">
          <h4>{FilterBook.length > 0 ? publisher : "Explore Books"}</h4>
          <TextField
            placeholder="Search by Title , Author , Genre and more..."
            className="input"
            value={searchBook}
            onChange={(e) => setSearchBook(e.target.value)}
            size="small"
            sx={{ width: "500px" }}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end" style={{ cursor: "pointer" }}>
                    <CiSearch size={22} />
                  </InputAdornment>
                ),
              },
            }}
          />
        </div>
        {false ? (
          <BookListLoading />
        ) : (
          <BookList
            FilteredBook={FilteredBook}
            handleBookOpen={handleBookOpen}
            BookLoading={BookLoading}
          />
        )}
      </div>
    </>
  );
}

export default ExploreBook;
