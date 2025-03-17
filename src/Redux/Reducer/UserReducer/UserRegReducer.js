import * as Type from "../../ActionType";

const initialState = {
  loading: false,
  RegData: {},
  error: null,
};
function UserRegReducer(state = initialState, action) {
  switch (action.type) {
    case Type.USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Type.USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        RegData: action.payload,
      };
    case Type.USER_REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
export default UserRegReducer;
