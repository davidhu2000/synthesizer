import React from 'react';
import Track from './track.jsx';

const Jukebox = ({ tracks, isPlaying, isRecording, onPlay }) => (
  <div>
    <div>Jukebox</div>
    {
      Object.keys(tracks).map( id => (
        <Track className='track'
               key={`track-${id}`}
               track={tracks[id]}
               disabled={isRecording || isPlaying}
               onPlay={onPlay(tracks[id])}/>
      ))
    }
  </div>
);

export default Jukebox;
