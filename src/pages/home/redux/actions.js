const actions = {
  SEND_LOADPRODUCT_REQ: "SEND_LOADPRODUCT_REQ",
  SEND_LOADPRODUCT_SUC: "SEND_LOADPRODUCT_SUC",
  SEND_LOADPRODUCT_FAIL: "SEND_LOADPRODUCT_FAIL",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  ADJUST_ITEM_QTY: "ADJUST_ITEM_QTY",

  loadproduct: (payload) => ({
    type: actions.SEND_LOADPRODUCT_REQ,
    payload,
  }),

  addToCart: (itemID) => {
    return {
      type: actions.ADD_TO_CART,
      payload: {
        id: itemID,
      },
    };
  },

  removeFromCart: (itemIDD) => {
    return {
      type: actions.REMOVE_FROM_CART,
      payloads: {
        id: itemIDD,
      },
    };
  },

  adjustItemQty: (itemID, qty) => {
    return {
      type: actions.ADJUST_ITEM_QTY,
      payload: {
        id: itemID,
        qty,
      },
    };
  },
};

export default actions;
