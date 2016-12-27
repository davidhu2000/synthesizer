import React from 'react';
import SynthContainer from './synth/synth_container.jsx';
import RecorderContainer from './recorder/recorder_container.jsx';
import JukeboxContainer from './jukebox/jukebox_container.jsx';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
        <SynthContainer />
        <RecorderContainer />
        <JukeboxContainer />
      </div>
    );
  }
}

export default App;
