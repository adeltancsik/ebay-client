import { combineReducers } from "redux";
import ads from "./ads";
import ad from "./ad";
import user from "./user";
import signup from "./signup";

export default combineReducers({
  ads,
  ad,
  user,
  signup
});
