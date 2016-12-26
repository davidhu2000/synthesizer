import { KEY_PRESSED, KEY_RELEASED } from "../actions/notes_actions.js";
import NOTE_NAMES from '../util/tones.js';

const _defaultState = () => {
  return [];
};

const notes = (state = _defaultState(), action) => {
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
    default:
      return state;
  }
};

export default notes;
