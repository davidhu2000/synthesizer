import React from 'react';

const openModal = (id) => (e) => {
  e.preventDefault();
  let modal = document.getElementById('modal');
  modal.className = '';
  modal.setAttribute('trackId', id);
};

const Track = ({ track, disabled, onPlay, onDelete, onRename }) => (
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
      <button key={track.id}
              className='jukebox-button rename-button'
              disabled={disabled}
              onClick={openModal(track.id)}>
        Rename
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
