import { useSelector } from "react-redux";
import actions from "./actions";

const initialState = {
  cart: [],
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TO_CART:
      const products = useSelector((state) => state.productlisting.allproducts);

      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
  }
};
