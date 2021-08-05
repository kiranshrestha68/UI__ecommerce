import { combineReducers } from "redux";
import LoadProduct from "../pages/home/redux/reducer";

const rootReducer = combineReducers({
productlisting: LoadProduct,
})

export default rootReducer;