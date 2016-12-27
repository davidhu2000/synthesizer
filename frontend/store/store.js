import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer.js';

const preloadedState = ({
  notes: [],
  isRecording: false
});

const configureStore = (state = preloadedState) => {
  return createStore(rootReducer, state);
};

export default configureStore;
