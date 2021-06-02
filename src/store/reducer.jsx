import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from "../pages/discover/c-page/songs/store";
export default combineReducers({
  recomend: recommendReducer,
});
