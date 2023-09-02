import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import numberReducer from "./number/numberReducer";

const rootReducer = combineReducers({
    counterState:counterReducer,
    numberState:numberReducer
})

export default rootReducer;