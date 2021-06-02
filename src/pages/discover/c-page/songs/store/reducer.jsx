import { Map } from "immutable";
import * as actionTypes from "./actions";

//声明的默认存储数据对象
const defaultState = Map({
  category: [],
  currentCategory: "全部",
  categorySongs: {},
});

/* eslint-disable import/no-anonymous-default-export */
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY:
      return state.set("category", action.category);
    case actionTypes.CHANGE_CATEGROY_SONGS:
      return state.set("currentCategory", action.currentCategory);
    case actionTypes.CHANGE_CURRENT_CATEGROY:
      return state.set("categorySongs", action.categorySongs);
    default:
      return state;
  }
};
