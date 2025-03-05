import { combineReducers } from "redux";
import PublisherLoginReducer from "./PublisherReducer/PLoginReducer";
import PublisherRegisterReducer from "./PublisherReducer/PRegisterReducer";
import BookReducer from "./PublisherReducer/BookReducer";
import CategoryReducer from "./PublisherReducer/CategoryReducer";
import UserLoginReducer from "./UserReducer/UserLoginReducer";

const RootReducer = combineReducers({
  PublisherLogin: PublisherLoginReducer,
  PublisherReg: PublisherRegisterReducer,
  BookData: BookReducer,
  category: CategoryReducer,

  UserLogin : UserLoginReducer
});

export default RootReducer;
