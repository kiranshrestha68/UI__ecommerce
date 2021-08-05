import actions from "./actions";

const initialState = {
  allproducts: [],
  loading: false,
  error: null,
};

const LoadProduct = (state = initialState, action) => {
  switch (action.type) {
    case actions.SEND_LOADPRODUCT_REQ:
      return {
        ...state,
        loading: true,
      };
    case actions.SEND_LOADPRODUCT_SUC:
      return {
        ...state,
        loading: false,
        allproducts: action.products,
      };
    case actions.SEND_LOADPRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.message,
      };

    default:
      return { ...state };
  }
};

export default LoadProduct;
