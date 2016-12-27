import React from 'react';

const Recorder = ({isRecording, startRecording, stopRecording}) => (
    <div className='recorder'>
      <div className='recorder-title'>
        Recorder
      </div>
      <button className='start-button'
              disabled={isRecording}
              onClick={startRecording}>
        Start
      </button>

      <button className='stop-button'
              disabled={!isRecording}
              onClick={stopRecording}>
        Stop
      </button>
    </div>
);



export default Recorder;
