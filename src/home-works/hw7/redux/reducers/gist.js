import {
  GET_GISTS_PENDING,
  GET_GISTS_SUCCESS,
  GET_GISTS_ERROR,
} from "../actions/gists";


const initialState = {
  error: null,
  loading: false,
  list: []
};


function gistsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GISTS_PENDING:
      return {
        ...state,
        loading: true
      };
    case GET_GISTS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case GET_GISTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default: return state;
  }
}



export default gistsReducer

