import { combineReducers } from 'redux';
import notesReducer from './notes_reducer.js';
import isRecordingReducer from './is_recording_reducer.js';
import tracksReducer from './tracks_reducer.js';
import isPlayingReducer from './is_playing_reducer.js';

const rootReducer = combineReducers({
  notes: notesReducer,
  isRecording: isRecordingReducer,
  tracks: tracksReducer,
  isPlaying: isPlayingReducer
});

export default rootReducer;
