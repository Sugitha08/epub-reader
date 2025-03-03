import { call, put, takeLatest } from "redux-saga/effects";
import * as Type from "../../ActionType";
import { Add_Category } from "../../../Service/PublisherService";
import { Add_Cat_Failure, Add_Cat_Success, Get_Cat_Failure, Get_Cat_Success } from "../../Action/PublisherAction/CategoryAction";

function* Add_CategorySaga({ payload }) {
  try {
    const Response = yield call(Add_Category, payload);
    yield put(Add_Cat_Success(Response.data));
  } catch (error) {
    yield put(Add_Cat_Failure(error));
  }
}

function* Get_CategorySaga({ payload }) {
    try {
      const Response = yield call(Add_Category, payload);
      yield put(Get_Cat_Success(Response.data));
    } catch (error) {
      yield put(Get_Cat_Failure(error));
    }
  }

function* watchCategory() {
  yield takeLatest(Type.ADD_CATEGORY_REQUEST, Add_CategorySaga);
  yield takeLatest(Type.GET_CATEGORY_REQUEST, Get_CategorySaga);
}
export default watchCategory;
