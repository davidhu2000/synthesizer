import combineReducers from 'redux';
import notes from './notes_reducer.js';

const rootReducers = combineReducers({
  notes
});

export default rootReducers;
