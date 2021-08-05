const actions = {
    SEND_LOADPRODUCT_REQ: "SEND_LOADPRODUCT_REQ",
    SEND_LOADPRODUCT_SUC: "SEND_LOADPRODUCT_SUC",
    SEND_LOADPRODUCT_FAIL: "SEND_LOADPRODUCT_FAIL",


loadproduct: (payload) => ({
    type: actions.SEND_LOADPRODUCT_REQ,
    payload,
})

}

export default actions;