import merge from 'lodash/merge';
import { DELETE_TRACK,
         RENAME_TRACK } from '../actions/playing_actions.js';
import { START_RECORDING,
         STOP_RECORDING,
         ADD_NOTES } from '../actions/track_actions.js';

let currTrackId = 0;

const trackReducer = (state, action) => {
  Object.freeze(state);
  switch(action.type) {
    case START_RECORDING:
      return {
        id: currTrackId,
        name: `Track ${currTrackId}`,
        roll: [],
        timeStart: action.timeStart
      };
    case STOP_RECORDING:
      return merge({}, state, {
        roll: [
          ...state.roll,
          { notes: [], timeSlice: action.timeNow - state.timeStart }
        ]
      });
    case ADD_NOTES:
      return merge({}, state, {
        roll: [
          ...state.roll,
          { notes: action.notes, timeSlice: action.timeNow - state.timeStart}
        ]
      });
    case RENAME_TRACK:
      console.log('renaming');
      console.log(action);
      return merge({}, state, {
        name: action.name
      });
    default:
      return state;
  }
};

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case START_RECORDING:
      currTrackId++;
      return merge({}, state, {
        [currTrackId]: trackReducer(undefined, action)
      });
    case STOP_RECORDING:
      return merge({}, state, {
        [currTrackId]: trackReducer(state[currTrackId], action)
      });
    case ADD_NOTES:
      return merge({}, state, {
        [currTrackId]: trackReducer(state[currTrackId], action)
      });
    case DELETE_TRACK:
      let newState = merge({}, state);
      delete newState[action.id];
      return newState;
    case RENAME_TRACK:
      return merge({}, state, {
        [action.id]: trackReducer(state[action.id], action)
      });
    default:
      return state;
  }
};

export default tracksReducer;
