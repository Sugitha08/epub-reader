import * as Type from "../../ActionType";

const initialState = {
  loading: false,
  cartItems: [],
  error: null,
};
function CartBookReducer(state = initialState, action) {
  switch (action.type) {
    case Type.ADD_CARTBOOK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Type.ADD_CARTBOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        // cartItems: action.payload,
      };
    case Type.ADD_CARTBOOK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case Type.GET_CARTBOOK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Type.GET_CARTBOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: action.payload.cart,
      };
    case Type.GET_CARTBOOK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case Type.DEL_CARTBOOK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Type.DEL_CARTBOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        // cartItems: action.payload,
      };
    case Type.DEL_CARTBOOK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
export default CartBookReducer;
