import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "../Redux/Reducer";
import RootSaga from "../Redux/Saga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: RootReducer,
  middleware: (getdefaultmiddle) => getdefaultmiddle().concat(middleware),
});

sagaMiddleware.run(RootSaga);

export default store;
