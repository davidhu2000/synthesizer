import React from 'react';

const Track = ({ track, disabled, onPlay }) => (
  <div>
    <div>{track.name}</div>
    <div>
      <button disabled={disabled}
              onClick={onPlay}>
        Play
      </button>
    </div>
  </div>
);

export default Track;
