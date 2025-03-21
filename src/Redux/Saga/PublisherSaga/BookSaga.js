import { call, put, takeLatest } from "redux-saga/effects";
import * as Type from "../../ActionType";
import {
  deleteBook,
  Get_Books,
  GetBook_by_Category,
  GetBook_by_id,
  Upload_book,
} from "../../../Service/PublisherService";
import {
  DeleteBook_Failure,
  DeleteBook_Success,
  Get_book_Failure,
  Get_book_Success,
  Get_bookbycat_Failure,
  Get_bookbycat_Success,
  Get_bookbyId_Failure,
  Get_bookbyId_Success,
  Upload_book_Failure,
  Upload_book_Success,
} from "../../Action/PublisherAction/BookAction";
import { toast } from "react-toastify";

function* UploadBookSaga({ payload }) {
  try {
    const Response = yield call(Upload_book, payload);
    yield put(Upload_book_Success(Response.data));
  } catch (error) {
    yield put(Upload_book_Failure(error));
  }
}

function* GetAllBook() {
  try {
    const Response = yield call(Get_Books);
    yield put(Get_book_Success(Response.data));
  } catch (error) {
    yield put(Get_book_Failure(error));
  }
}

function* GetBookByidSaga({ payload }) {
  try {
    const Response = yield call(GetBook_by_id, payload);
    yield put(Get_bookbyId_Success(Response.data));
  } catch (error) {
    yield put(Get_bookbyId_Failure(error));
  }
}

function* GetBookBycatSaga({ payload }) {
  try {
    const Response = yield call(GetBook_by_Category, payload);
    yield put(Get_bookbycat_Success(Response.data));
  } catch (error) {
    yield put(Get_bookbycat_Failure(error));
  }
}

function* DeleteBook({ payload }) {
  try {
    const Response = yield call(deleteBook, payload);
    yield put(DeleteBook_Success(Response.data));
    console.log(Response.data);
    
    toast.success(Response.data.message);
  } catch (error) {
    yield put(DeleteBook_Failure(error));
  }
}

function* watchPubBook() {
  yield takeLatest(Type.UPLOAD_FILE_REQUEST, UploadBookSaga);
  yield takeLatest(Type.GET_BOOK_REQUEST, GetAllBook);
  yield takeLatest(Type.GET_BOOK_ID_REQUEST, GetBookByidSaga);
  yield takeLatest(Type.GET_BOOK_CAT_REQUEST, GetBookBycatSaga);
  yield takeLatest(Type.DEL_BOOK_REQUEST, DeleteBook);
}
export default watchPubBook;
