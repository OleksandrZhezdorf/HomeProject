import { combineReducers } from '@reduxjs/toolkit'
import gistsReducer from './reducers/gist';
import rawReducer from './reducers/raw';


const rootReducer = combineReducers({
    gists: gistsReducer,
    raws: rawReducer
  });
  
  export default rootReducer;
  