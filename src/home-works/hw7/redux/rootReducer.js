import { combineReducers } from '@reduxjs/toolkit'
import gistsReducer from './reducers/gist';
import rawReducer, { selectedRawReducer } from './reducers/raw';


const rootReducer = combineReducers({
    gists: gistsReducer,
    raws: rawReducer,
    selectedRaws: selectedRawReducer
  });
  
  export default rootReducer;
  