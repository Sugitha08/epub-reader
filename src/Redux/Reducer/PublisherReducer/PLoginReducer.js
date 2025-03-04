import * as Type from "../../ActionType";

const Auth_Token = localStorage.getItem("Auth_Token");

const initialState = {
  loading: false,
  LoginData: {},
  LoginStatus: Auth_Token ? true : false,
  error: null,
};
function PublisherLoginReducer(state = initialState, action) {
  switch (action.type) {
    case Type.PUBLISHER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Type.PUBLISHER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        LoginData: action.payload,
        LoginStatus: action.payload.access_token ? true : false,
      };
    case Type.PUBLISHER_LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case Type.PUBLISHER_LOGOUT:
      localStorage.removeItem("Auth_Token")

      return { ...state, LoginStatus: false };
    default:
      return state;
  }
}
export default PublisherLoginReducer;
