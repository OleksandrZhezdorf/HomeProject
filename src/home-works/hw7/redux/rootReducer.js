import { combineReducers } from '@reduxjs/toolkit'
import gistIDReducer from './reducers/gist';

const rootReducer = combineReducers({
    gists: gistIDReducer,

  });
  
  export default rootReducer;
  