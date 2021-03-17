import {
  SELECT_ID,
  GET_RAW_BY_ID_PENDING,
  GET_RAW_BY_ID_SUCCESS,
  GET_RAW_BY_ID_ERROR
} from "../actions/raws";
import { combineReducers } from "redux";


function selectedRawReducer(state = '', action) {
  if (action.type === SELECT_ID) {
    return action.payload;
  }
  return state;
}

const initialState = {
  error: null,
  loading: false,
  list: []
};


function rawsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RAW_BY_ID_PENDING:
      return {
        ...state,
        loading: true
      };
    case GET_RAW_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case GET_RAW_BY_ID_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default: return state;
  }
}

const IDRawReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_RAW_BY_ID_PENDING:
    case GET_RAW_BY_ID_SUCCESS:
    case GET_RAW_BY_ID_SUCCESS:
      return {
        ...state,
        [action.meta.id]: rawsReducer(state[action.meta.id], action.meta.files.map((file, index) => ({
          ...file,
          fileContent: action.payload[index]
        })))
      };
    default: return state;
  }
};

const rawReducer = combineReducers({
  IDraws: IDRawReducer,
  selectedRaws: selectedRawReducer
});

export default rawReducer;