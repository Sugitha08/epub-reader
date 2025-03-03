import * as Type from "../../ActionType";

const initialState = {
  loading: false,
  LoginData: [],
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
      };
    case Type.PUBLISHER_LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
export default PublisherLoginReducer;
