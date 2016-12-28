export const START_PLAYING = 'START_PLAYING';
export const STOP_PLAYING = 'STOP_PLAYING';
export const DELETE_TRACK = 'DELETE_TRACK';

export const startPlaying = () => ({
  type: START_PLAYING
});

export const stopPlaying = () => ({
  type: STOP_PLAYING
});

export const deleteTrack = (id) => ({
  type: DELETE_TRACK,
  id
});
