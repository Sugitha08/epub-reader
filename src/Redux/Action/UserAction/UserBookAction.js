import * as Type from "../../ActionType";

export const GetUserBook_Request = () => ({
  type: Type.GET_USERBOOKSUG_REQUEST,
});

export const GetUserBook_Success = (payload) => ({
  type: Type.GET_USERBOOKSUG_SUCCESS,
  payload: payload,
});

export const GetUserBook_Failure = (payload) => ({
  type: Type.GET_USERBOOKSUG_FAILURE,
  payload: payload,
});

export const GetUserBookbyId_Request = (payload) => ({
  type: Type.GET_USERBOOKBYID_REQUEST,
  payload: payload,
});

export const GetUserBookbyId_Success = (payload) => ({
  type: Type.GET_USERBOOKBYID_SUCCESS,
  payload: payload,
});

export const GetUserBookbyId_Failure = (payload) => ({
  type: Type.GET_USERBOOKBYID_FAILURE,
  payload: payload,
});
