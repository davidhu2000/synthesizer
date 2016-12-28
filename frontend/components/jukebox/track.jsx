import React from 'react';

const Track = ({ track, disabled, onPlay, onDelete }) => (
  <ul className='track'>
    <li className='track-name'>{track.name}</li>
    <li>
      <button className='jukebox-button play-button'
              disabled={disabled}
              onClick={onPlay}>
        Play
      </button>
    </li>
    <li>
      <button className='jukebox-button delete-button'
              disabled={disabled}
              onClick={onDelete}>
        Delete
      </button>
    </li>
  </ul>
);

export default Track;
