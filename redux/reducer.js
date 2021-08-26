import initialState from "./initialState";
import { TOGGLE_MENU } from "./type";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return { ...state, isSidebarShow: !state.isSidebarShow };

    default:
      return state;
  }
};

export default reducer;
