import axios from 'axios';
export const SELECT_ID = 'SELECT_ID';
export const GET_RAW_BY_ID_PENDING = 'GET_RAW_BY_ID_PENDING';
export const GET_RAW_BY_ID_SUCCESS = 'GET_RAW_BY_ID_SUCCESS';
export const GET_RAW_BY_ID_ERROR = 'GET_RAW_BY_ID_ERROR';


export const selectID = id => ({
  type: SELECT_ID,
  payload: id
});



export const fetchRawsByID = id => (dispatch, getState) => {
  const currentState = getState();
  dispatch({
    type: GET_RAW_BY_ID_PENDING,
    meta: {
      id
    }
  });
  axios
    .get(`https://api.github.com/gists/${id}`)
    .then(response => {
      dispatch({
        type: GET_RAW_BY_ID_SUCCESS,
        payload: response.data.files.map(file => file.raw_url),
        meta: {
          id
        },
        
      })
    })
    .catch(err => {
      dispatch({
        type: GET_RAW_BY_ID_ERROR,
        payload: err.response.message,
        meta: {
          id
        }
      })
    })
};
