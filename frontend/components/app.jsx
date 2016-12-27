import React from 'react';
import SynthContainer from './synth/synth_container.jsx';
import RecorderContainer from './recorder/recorder_container.jsx';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
        <SynthContainer />
        <RecorderContainer />
      </div>
    );
  }
}

export default App;
