import React from 'react';
import SynthContainer from './synth/synth_container.jsx';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
        <SynthContainer />
      </div>
    );
  }
}

export default App;
