import React from 'react';
import { START_PLAYING, STOP_PLAYING } from '../actions/playing_actions.js';

const _defaultState = false;

const isPlayingReducer = (state = _defaultState, action) => {
  switch(action.type) {
    case START_PLAYING:
      return true;
    case STOP_PLAYING:
      return false;
    default:
      return state;
  }
};

export default isPlayingReducer;
