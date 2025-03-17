import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import Layout from "./Components/Layout/Layout/Layout";
import PublishDashboard from "./Components/Layout/Publisher/Dashboard/PublishDashboard";
import Auth from "./Components/Authentication/Auth";
import Library from "./Components/Layout/Publisher/Library/Library";
import Report from "./Components/Layout/Publisher/Report/Report";
import UploadFile from "./Components/Layout/Publisher/UploadFile/UploadFile";
import BookDetail from "./Components/Layout/Publisher/Library/BookDetail";
import UserDashboard from "./Components/Layout/User/Dashboard/UserDashboard";
import ExploreBook from "./Components/Layout/User/ExploreBook/ExploreBook";
import ExploreBookDetail from "./Components/Layout/User/ExploreBook/ExploreBookDetail";
import UserDetail from "./Components/Layout/User/UserDetails/UserDetail";
import Wishlist from "./Components/Layout/User/Library/Wishlist";
import UserLibrary from "./Components/Layout/User/Library/UserLibrary";
import Orders from "./Components/Layout/User/Library/Orders";
import { ToastContainer } from "react-toastify";
import OrderSummary from "./Components/Layout/User/Library/OrderSummary";
import Forgotpswd from "./Components/Authentication/Forgotpswd/Forgotpswd";
import OrderPlaced from "./Components/Layout/User/Library/OrderPlaced";
import PubLogin from "./Components/Authentication/PublisherAuth/PubLogin";
import UserLogin from "./Components/Authentication/UserAuth/UserLogin";
import PubRegister from "./Components/Authentication/PublisherAuth/PubRegister";
import UserRegister from "./Components/Authentication/UserAuth/UserRegister";
import { useSelector } from "react-redux";
import UserLayout from "./Components/Layout/Layout/UserLayout";
import PublisherLayout from "./Components/Layout/Layout/PublisherLayout";
// import Preview from "./Components/Layout/Publisher/Library/preview";
import Read from "./Components/Layout/Read";
import PublisherBook from "./Components/Layout/User/ExploreBook/PublisherBook";
import ScrollToTop from "./Components/Core-Components/ScrollToTop";
import NotFound from "./Components/Layout/NotFound/NotFound";
import PubEpubReader from "./Components/Layout/Publisher/Reader/PubEpubReader";
import UserEpubReader from "./Components/Layout/User/Reader/UserEpubReader";

function App() {
  const { PubLoginStatus } = useSelector((state) => state.PublisherLogin);
  const { UserLoginStatus } = useSelector((state) => state?.UserLogin);
  const token = localStorage.getItem("User_Auth_Token");
  return (
    <>
      <BrowserRouter>
        <ToastContainer toastClassName="custom-toast" />
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route element={<Auth />}>
              <Route index element={<UserLogin />} />
              <Route path="/reader/register" element={<UserRegister />} />
              <Route path="/publisher/login" element={<PubLogin />} />
              <Route path="/publisher/register" element={<PubRegister />} />
            </Route>
            <Route path="/resetpassword" element={<Forgotpswd />} />
          </Route>
          {PubLoginStatus ? (
            <Route element={<PublisherLayout />}>
              {/* publisher */}
              {/* <Route
                  path="/publisher/dashboard/"
                  element={<PublishDashboard />}
                /> */}
              <Route
                path="/publisher/dashboard/library"
                element={<Library />}
              />
              <Route path="/publisher/dashboard/" element={<Report />} />
              <Route
                path="/publisher/dashboard/upload/"
                element={<UploadFile />}
              />
              <Route
                path="/publisher/dashboard/library/book/:id"
                element={<BookDetail />}
              />
            </Route>
          ) : (
            "Page Not Found"
          )}
          {PubLoginStatus ? (
            <Route path="/publisher/bookpreview" element={<PubEpubReader />} />
          ) : (
            ""
          )}

          {/* User */}

          {UserLoginStatus ? (
            <Route element={<UserLayout />}>
              <Route path="/user/dashboard/" element={<UserDashboard />} />
              <Route path="/user/dash/explore" element={<ExploreBook />} />
              <Route
                path="/user/dash/explore/book/:id"
                element={<ExploreBookDetail />}
              />
              <Route path="/user/dash/detail/*" element={<UserDetail />}>
                <Route path="wishlist" element={<Wishlist />} />
                <Route path="library" element={<UserLibrary />} />
                <Route path="order" element={<Orders />} />
              </Route>
              <Route
                path="/user/dash/detail/order/summary"
                element={<OrderSummary />}
              />
              <Route
                path="/user/dash/detail/order/summary/orderplaced"
                element={<OrderPlaced />}
              />
              <Route
                path="/user/publisherDetails"
                element={<PublisherBook />}
              />
              <Route path="/user/bookpreview" element={<UserEpubReader />} />
            </Route>
          ) : (
            "Page Not Found"
          )}

          <Route path="/book/preview" element={<Read />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
