import * as actionTypes from "./actions";
import { handleSongsCategory } from "@/utils/handleData";
import { getSongCateGory, getSongCategoryList } from "@/services/song";

const changeCategoryAction = (res) => ({
  type: actionTypes.CHANGE_CURRENT_CATEGROY,
  category: res,
});

const changeSongListAction = (res) => ({
  type: actionTypes.CHANGE_CATEGROY_SONGS,
  categorySongs: res,
});

export const getCategory = () => {
  return (dispatch) => {
    getSongCateGory().then((res) => {
      const categoryData = handleSongsCategory(res);
      dispatch(changeCategoryAction(categoryData));
    });
  };
};

export const getSongList = (page) => {
  return (dispatch, getState) => {
    const name = getState().getIn(["song", "currentCategory"]);
    getSongCategoryList(name, page * 35).then((res) => {
      dispatch(changeSongListAction(res));
    });
  };
};
