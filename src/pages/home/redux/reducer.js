import actions from "./actions";

const initialState = {
  allproducts: [],
  loading: false,
  error: null,
  cart: [],
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

    case actions.ADD_TO_CART:
      const item = state.allproducts.find(
        (product) => product.id === action.payload.id
      );

      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };

    case actions.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payloads.id),
      };

    case actions.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                qty: +action.payload.qty,
              }
            : item
        ),
      };

    default:
      return state;
  }
};

export default LoadProduct;
