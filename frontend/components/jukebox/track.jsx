import React from 'react';

const Track = ({ track, disabled, onPlay }) => (
  <div className='track'>
    <div className='track-name'>{track.name}</div>
    <div>
      <button className='play-button'
              disabled={disabled}
              onClick={onPlay}>
        Play
      </button>
    </div>
  </div>
);

export default Track;
