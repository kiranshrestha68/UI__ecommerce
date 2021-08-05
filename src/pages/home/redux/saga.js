import { call, put, takeEvery } from "redux-saga/effects";
import { loadproductlistingApi} from "../../../config/api";
import actions from "./actions";

function* onLoadProductStartAsync(action) {
  try {
    const response = yield call(loadproductlistingApi, action.payload);
    let { data } = response;
  

    yield put({
      type: actions.SEND_LOADPRODUCT_SUC,

      products: data,
    });
  } catch (err) {
    yield put({
      type: actions.SEND_LOADPRODUCT_FAIL,
      message: err.message,
    });
  }
}

export function* fetchProduct() {
  yield takeEvery(actions.SEND_LOADPRODUCT_REQ, onLoadProductStartAsync);
}
