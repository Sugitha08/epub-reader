import { all } from "redux-saga/effects";
import watchPublisherLogin from "./PublisherSaga/PLoginSaga";
import watchPublisherRegister from "./PublisherSaga/PRegisterSaga";
import watchUploadBook from "./PublisherSaga/BookSaga";
import watchCategory from "./PublisherSaga/Category";

function* RootSaga() {
  yield all([
    watchPublisherLogin(),
    watchPublisherRegister(),
    watchUploadBook(),
    watchCategory(),
  ]);
}
export default RootSaga;
