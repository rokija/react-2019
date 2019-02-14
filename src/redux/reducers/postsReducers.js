import { GET_POSTS_SUCCESS, GET_POSTS_ERROR } from "../../constants";

const defaultState = {
  posts: null
};

export const postsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return { ...state, posts: action.payload.reverse() };
    case GET_POSTS_ERROR:
      return { ...state, posts: null };
    default:
      return state;
  }
};
