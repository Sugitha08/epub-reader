import { combineReducers } from "redux";
import PublisherLoginReducer from "./PublisherReducer/PLoginReducer";
import PublisherRegisterReducer from "./PublisherReducer/PRegisterReducer";
import BookReducer from "./PublisherReducer/BookReducer";
import CategoryReducer from "./PublisherReducer/CategoryReducer";
import UserLoginReducer from "./UserReducer/UserLoginReducer";
import UserRegReducer from "./UserReducer/UserRegReducer";
import PurchaseBookReducer from "./UserReducer/PurchaseBookReducer";
import CartBookReducer from "./UserReducer/CartBookReducer";
import WishlistBookReducer from "./UserReducer/WishlistBookReducer";
import UserBookReducer from "./UserReducer/UserBookReducer";

const RootReducer = combineReducers({
  PublisherLogin: PublisherLoginReducer,
  PublisherReg: PublisherRegisterReducer,
  BookData: BookReducer,
  category: CategoryReducer,

  UserLogin: UserLoginReducer,
  ReaderReg: UserRegReducer,
  PurchasedBook: PurchaseBookReducer,
  CartBook : CartBookReducer,
  WishlistBook : WishlistBookReducer,
  UserBook:UserBookReducer
});

export default RootReducer;
