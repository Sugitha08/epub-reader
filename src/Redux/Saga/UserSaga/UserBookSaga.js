import { call, put, takeLatest } from "redux-saga/effects";
import * as Type from "../../ActionType";
import { toast } from "react-toastify";
import { Get_user_Book, Get_user_BookbyId } from "../../../Service/UserService";
import {
  GetUserBook_Failure,
  GetUserBook_Success,
  GetUserBookbyId_Failure,
  GetUserBookbyId_Success,
} from "../../Action/UserAction/UserBookAction";

function* GetUserBook() {
  try {
    const Response = yield call(Get_user_Book);
    toast.success(Response?.data?.message);
    yield put(GetUserBook_Success(Response.data));
  } catch (error) {
    toast.error(error?.response?.data?.error);
    yield put(GetUserBook_Failure(error));
  }
}

function* GetUserBookById({ payload }) {
  try {
    const Response = yield call(Get_user_BookbyId, payload);
    toast.success(Response?.data?.message);
    yield put(GetUserBookbyId_Success(Response.data));
  } catch (error) {
    toast.error(error?.response?.data?.error);
    yield put(GetUserBookbyId_Failure(error));
  }
}

function* watchUserBook() {
  yield takeLatest(Type.GET_USERBOOKSUG_REQUEST, GetUserBook);
  yield takeLatest(Type.GET_USERBOOKBYID_REQUEST, GetUserBookById);
}
export default watchUserBook;
