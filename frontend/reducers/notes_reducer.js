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
  const validNote = NOTE_NAMES.includes(action.key);
  const idx = nextState.indexOf(action.key);

  switch (action.type) {
    case KEY_PRESSED:
      if(validNote && idx === -1) {
        nextState.push(action.key);
      }
      return nextState;
    case KEY_RELEASED:
      if (idx !== -1) {
        nextState.splice(idx, 1);
      }
      return nextState;
    case GROUP_UPDATE:
      return [...action.notes];
    default:
      return state;
  }
};

export default notesReducer;
