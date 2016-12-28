import React from 'react';
import Track from './track.jsx';

const Jukebox = ({ tracks, isPlaying, isRecording, onPlay, onDelete, onRename }) => (
  <div>
    <div className="jukebox-title">Jukebox</div>
    {
      Object.keys(tracks).map( id => (
        <Track key={`track-${id}`}
               track={tracks[id]}
               disabled={isRecording || isPlaying}
               onPlay={onPlay(tracks[id])}
               onDelete={onDelete(id)}
               onRename={onRename(id, 'yo')}/>
      ))
    }
  </div>
);

export default Jukebox;
