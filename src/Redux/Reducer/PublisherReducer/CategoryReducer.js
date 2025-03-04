import * as Type from "../../ActionType";

const initialState = {
  loading: false,
  LoginData: [],
  error: null,
};
function CategoryReducer(state = initialState, action) {
  switch (action.type) {
    case Type.ADD_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Type.ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        LoginData: action.payload,
      };
    case Type.ADD_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case Type.GET_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Type.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        LoginData: action.payload,
      };
    case Type.GET_CATEGORY_FAILURE:
      console.log(action.payload, "getCat");

      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
export default CategoryReducer;
