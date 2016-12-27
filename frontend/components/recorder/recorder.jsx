import React from 'react';

const Recorder = ({isRecording, isPlaying, startRecording, stopRecording}) => (
    <div className='recorder'>
      <div className='recorder-title'>
        Recorder
      </div>
      <button className='start-button'
              disabled={isRecording || isPlaying}
              onClick={startRecording}>
        Start
      </button>

      <button className='stop-button'
              disabled={!isRecording || isPlaying}
              onClick={stopRecording}>
        Stop
      </button>
    </div>
);



export default Recorder;
