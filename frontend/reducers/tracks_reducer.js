import merge from 'lodash/merge';
import { START_RECORDING,
         STOP_RECORDING,
         ADD_NOTES } from '../actions/track_actions.js';

let currTrackId = 0;

const trackReducer = (state, action) => {
  Object.freeze(state);
  switch(action.type) {
    case START_RECORDING:
      console.log('start recording');
      return {
        id: currTrackId,
        name: `Track ${currTrackId}`,
        roll: [],
        timeStart: action.timeStart
      };
    case STOP_RECORDING:
      console.log('stop recording');
      return merge({}, state, {
        roll: [
          ...state.roll,
          { notes: [], timeSlice: action.timeNow - state.timeStart }
        ]
      });
    case ADD_NOTES:
      console.log('adding notes');
      console.log(action.notes);
      return merge({}, state, {
        roll: [
          ...state.roll,
          { notes: action.notes, timeSlice: action.timeNow - state.timeStart}
        ]
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
    default:
      return state;
  }
};

export default tracksReducer;
