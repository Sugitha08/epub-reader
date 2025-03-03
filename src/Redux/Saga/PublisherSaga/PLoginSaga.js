import { call, put, takeLatest } from "redux-saga/effects";
import * as Type from "../../ActionType";
import { PublisherLogin } from "../../../Service/PublisherService";
import {
  Publisher_Login_Failure,
  Publisher_Login_Success,
} from "../../Action/PublisherAction/PuAuthAction";

function* PublisherLoginSaga({ payload }) {
  try {
    const Response = yield call(PublisherLogin, payload);
    yield put(Publisher_Login_Success(Response.data));
  } catch (error) {
    yield put(Publisher_Login_Failure(error));
  }
}

function* watchPublisherLogin() {
  yield takeLatest(Type.PUBLISHER_LOGIN_REQUEST, PublisherLoginSaga);
}
export default watchPublisherLogin;
