import { all } from "redux-saga/effects";
import watchPublisherLogin from "./PublisherSaga/PLoginSaga";
import watchPublisherRegister from "./PublisherSaga/PRegisterSaga";
import watchUploadBook from "./PublisherSaga/BookSaga";
import watchCategory from "./PublisherSaga/Category";
import watchUserLogin from "./UserSaga/ULoginSaga";

function* RootSaga() {
  yield all([
    watchPublisherLogin(),
    watchPublisherRegister(),
    watchUploadBook(),
    watchCategory(),

    watchUserLogin()
  ]);
}
export default RootSaga;
