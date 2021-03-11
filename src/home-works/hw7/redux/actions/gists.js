import axios from 'axios';
export const GET_GIT_BY_ID_PENDING = 'GET_GIT_BY_ID_PENDING';
export const GET_GIT_BY_ID_SUCCESS = 'GET_GIT_BY_ID_SUCCESS';
export const GET_GIT_BY_ID_ERROR = 'GET_GIT_BY_ID_ERROR';


export const getGistsbyID = id => (dispatch, getState) => {
  const currentState = getState();
  if (currentState.gists[id] && currentState.gists[id].list.length > 0) return;
  dispatch({
    type: GET_GIT_BY_ID_PENDING,
  });
  axios.get('https://api.github.com/gists/public')
    .then(response => {
      dispatch({
        type: GET_GIT_BY_ID_SUCCESS,
        payload: response.data.map(gist => gist.data),
      })
    })
    .catch(err => {
      dispatch({
        type: GET_GIT_BY_ID_ERROR,
        payload: err.response.message,
      })
    })
};


