import BootcampAPI from "../../helpers/BootcampAPI";
import {
  API,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
  SUBMIT_POST_SUCCESS,
  SUBMIT_POST_ERROR
} from "../../constants";

const getPostsSuccess = res => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: res.data.payload
  };
};

const getPostsError = () => {
  return {
    type: GET_POSTS_ERROR
  };
};

const submitPostSuccess = res => {
  return {
    type: SUBMIT_POST_SUCCESS,
    payload: res.data.payload
  };
};

const submitPostError = () => {
  return {
    type: SUBMIT_POST_ERROR
  };
};

export const getPosts = () => {
  return dispatch => {
    return BootcampAPI.get(API.GET_POSTS)
      .then(res => dispatch(getPostsSuccess(res)))
      .catch(err => {
        console.error(err);
        dispatch(getPostsError());
      });
  };
};

export const submitPost = (formData, caption) => {
  return dispatch => {
    return BootcampAPI.post(API.POST_IMAGE, formData)
      .then(res => {
        return BootcampAPI.post(API.POST_CAPTION, {
          caption,
          contentId: res.data.payload.contentId
        }).then(res => dispatch(submitPostSuccess(res)));
      })
      .catch(err => {
        console.error(err);
        dispatch(submitPostError());
      });
  };
};
