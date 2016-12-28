import React from 'react';
import Track from './track.jsx';
import RenameModal from './rename_model.jsx';

const Jukebox = ({ tracks, isPlaying, isRecording, onPlay, onDelete, onRename }) => (
  <div>
    <RenameModal id='modal'
                 className='hidden'
                 tracks={tracks}
                 onRename={onRename} />

    <div className="jukebox-title">Jukebox</div>
    {
      Object.keys(tracks).map( id => (
        <Track key={`track-${id}`}
               track={tracks[id]}
               disabled={isRecording || isPlaying}
               onPlay={onPlay(tracks[id])}
               onDelete={onDelete(id)} />
      ))
    }
  </div>
);

export default Jukebox;
