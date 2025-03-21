import { all } from "redux-saga/effects";
import watchPublisherLogin from "./PublisherSaga/PLoginSaga";
import watchPublisherRegister from "./PublisherSaga/PRegisterSaga";
import watchPubBook from "./PublisherSaga/BookSaga";
import watchCategory from "./PublisherSaga/Category";
import watchUserLogin from "./UserSaga/ULoginSaga";
import watchUserRegister from "./UserSaga/URegSaga";
import watchPurchaseBook from "./UserSaga/PurchaseBookSaga";
import WatchCart from "./UserSaga/CartBookSaga";
import WatchWishlist from "./UserSaga/WishlistBookSaga";
import watchUserBook from "./UserSaga/UserBookSaga";

function* RootSaga() {
  yield all([
    watchPublisherLogin(),
    watchPublisherRegister(),
    watchPubBook(),
    watchCategory(),

    watchUserLogin(),
    watchUserRegister(),
    watchPurchaseBook(),
    WatchCart(),
    WatchWishlist(),
    watchUserBook()
  ]);
}
export default RootSaga;
