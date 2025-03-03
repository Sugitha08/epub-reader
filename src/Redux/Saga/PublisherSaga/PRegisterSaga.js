import { call, put, takeLatest } from "redux-saga/effects";
import * as Type from "../../ActionType";
import { PublisherRegister } from "../../../Service/PublisherService";
import {
  Publisher_Register_Failure,
  Publisher_Register_Success,
} from "../../Action/PublisherAction/PuAuthAction";

function* PublisherRegisterSaga({ payload }) {
  try {
    const Response = yield call(PublisherRegister, payload);
    yield put(Publisher_Register_Success(Response.data));
  } catch (error) {
    yield put(Publisher_Register_Failure(error));
  }
}

function* watchPublisherRegister() {
  yield takeLatest(Type.PUBLISHER_REGISTER_REQUEST, PublisherRegisterSaga);
}
export default watchPublisherRegister;
