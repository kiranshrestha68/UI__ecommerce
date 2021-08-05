import { all } from "redux-saga/effects";
import { fetchProduct } from "../pages/home/redux/saga";



export default function* rootSangas() {
  yield all([fetchProduct()]);
}