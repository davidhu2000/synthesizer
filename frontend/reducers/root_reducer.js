import { combineReducers } from 'redux';
import notes from './notes_reducer.js';

const rootReducer = combineReducers({
  notes
});

export default rootReducer;
