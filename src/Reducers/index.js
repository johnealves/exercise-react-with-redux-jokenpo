import { combineReducers } from "redux";
import gameReducer from "./gameReducer";
import buttonsReducer from "./buttonsReducer";

const rootReducer = combineReducers({
  gameReducer,
  buttonsReducer,
})

export default rootReducer;
