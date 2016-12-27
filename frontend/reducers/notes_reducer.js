import { KEY_PRESSED,
         KEY_RELEASED,
         GROUP_UPDATE } from "../actions/notes_actions.js";

import * as TONES from '../util/tones.js';
const NOTE_NAMES = TONES.NOTE_NAMES;

const _defaultState = () => {
  return [];
};

const notesReducer = (state = _defaultState(), action) => {
  Object.freeze(state);
  let nextState = state.slice();

  if (NOTE_NAMES.indexOf(action.key) === -1) return nextState;

  switch (action.type) {
    case KEY_PRESSED:
      if(nextState.indexOf(action.key) === -1) {
        nextState.push(action.key);
      }
      return nextState;
    case KEY_RELEASED:
      let keyIdx = nextState.indexOf(action.key);
      if (keyIdx !== -1) {
        nextState.splice(keyIdx, 1);
      }
      return nextState;
    case GROUP_UPDATE:
      return [...action.notes];
    default:
      return state;
  }
};

export default notesReducer;
