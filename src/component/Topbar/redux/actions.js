const actions = {
    ADD_TO_CART = "ADD_TO_CART",
    ADJUST_ITEM_QTY = "ADJUST_ITEM_QTY",
    REMOVE_FROM_CART = "REMOVE_FROM_CART",


addToCart = (itemID) => {
    return {
        type: actions.ADD_TO_CART,
        payload: {
            id: itemID,
        }
    }
},

removerFromCart = (itemID) => {
    return {
        types: actions.REMOVE_FROM_CART,
        payload: {
            id: itemID,

        }
    }
},

adjustItemQty = (itemID, qty) => {
    return {
        type: actions.ADJUST_ITEM_QTY,
        paylaod: {
            id: itemID,
            qty,
        }
    }
},

};

export default actions;


