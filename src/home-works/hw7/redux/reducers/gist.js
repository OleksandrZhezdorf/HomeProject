import {
    GET_GIT_BY_ID_PENDING,
    GET_GIT_BY_ID_SUCCESS,
    GET_GIT_BY_ID_ERROR,
  } from "../actions/gists";

  
  const initialState = {
    error: null,
    loading: false,
    list: []
  };
  
  
  function gistsReducer(state = initialState, action) {
    switch(action.type) {
      case GET_GIT_BY_ID_PENDING:
        return {
          ...state,
          loading: true
        };
      case GET_GIT_BY_ID_SUCCESS:
        return {
          ...state,
          loading: false,
          list: action.payload,
        };
      case GET_GIT_BY_ID_ERROR:
        return {
          ...state,
          loading:false,
          error: action.payload
        };
      default: return state;
    }
  }
  

 const gistIDReducer = (state = {}, action) => {
    switch(action.type) {
      case GET_GIT_BY_ID_PENDING:
      case GET_GIT_BY_ID_SUCCESS:
      case GET_GIT_BY_ID_ERROR:
      return {
        ...state,
        [action.meta.id]: gistsReducer(state[action.meta.id], action)
      };
      default: return state;
    }
  };

  export default gistIDReducer
  
