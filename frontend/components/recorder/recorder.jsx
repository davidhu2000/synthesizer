import React from 'react';

const Recorder = ({isRecording, isPlaying, startRecording, stopRecording}) => (
    <div className='recorder'>
      <div className='recorder-title'>
        Recorder
      </div>
      <button className='button start-button'
              disabled={isRecording || isPlaying}
              onClick={startRecording}>
        Start
      </button>

      <button className='button stop-button'
              disabled={!isRecording || isPlaying}
              onClick={stopRecording}>
        Stop
      </button>
    </div>
);



export default Recorder;
