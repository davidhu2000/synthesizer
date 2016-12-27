import { connect } from 'react-redux';
import Recorder from './recorder.jsx';
import { startRecording,
         stopRecording,
         addNotes } from '../../actions/track_actions.js';

const mapStateToProps = ({tracks, isRecording, isPlaying}) => ({
  tracks,
  isRecording,
  isPlaying
});

const mapDispatchToProps = dispatch => ({
  startRecording: () => dispatch(startRecording()),
  stopRecording: () => dispatch(stopRecording()),
  addNotes: notes => dispatch(addNotes(notes))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recorder);
