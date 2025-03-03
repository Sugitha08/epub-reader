import { combineReducers } from "redux";
import PublisherLoginReducer from "./PublisherReducer/PLoginReducer";
import PublisherRegisterReducer from "./PublisherReducer/PRegisterReducer";
import BookReducer from "./PublisherReducer/BookReducer";
import CategoryReducer from "./PublisherReducer/CategoryReducer";

const RootReducer = combineReducers({
  PublisherLogin: PublisherLoginReducer,
  PublisherReg: PublisherRegisterReducer,
  BookData: BookReducer,
  category: CategoryReducer,
});

export default RootReducer;
