import axios from 'axios';
export const GET_GISTS_PENDING = 'GET_GIT_BY_ID_PENDING';
export const GET_GISTS_SUCCESS = 'GET_GIT_BY_ID_SUCCESS';
export const GET_GISTS_ERROR = 'GET_GIT_BY_ID_ERROR';


export const getGistsbyID = () => (dispatch, getState) => {
  dispatch({
    type: GET_GISTS_PENDING,
  });
  axios.get('https://api.github.com/gists/public')
    .then(response => {
      dispatch({
        type: GET_GISTS_SUCCESS,
        payload: response.data,
      })
    })
    .catch(err => {
      dispatch({
        type: GET_GISTS_ERROR,
        payload: err.response.message,
      })
    })
};


