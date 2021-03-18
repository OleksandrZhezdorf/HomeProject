import {
  SELECT_ID,
  GET_RAW_BY_ID_PENDING,
  GET_RAW_BY_ID_SUCCESS,
  GET_RAW_BY_ID_ERROR
} from "../actions/raws";


export function selectedRawReducer(state = '', action) {
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


export default function IDRawReducer(state = initialState, action) {
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
        list: state.list.map((file) => ({
          ...file,
          fileContent: action.payload
        }))
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




