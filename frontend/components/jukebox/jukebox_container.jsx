import { connect } from 'react-redux';
import Jukebox from './jukebox.jsx';
import { groupUpdate } from '../../actions/notes_actions.js';
import { startPlaying,
         stopPlaying,
         deleteTrack,
         renameTrack } from '../../actions/playing_actions.js';

const mapStateToProps = (state) => ({
  tracks: state.tracks,
  isRecording: state.isRecording,
  isPlaying: state.isPlaying
});


const mapDispatchToProps = dispatch => ({
  onDelete: id => e => {
    dispatch(deleteTrack(id));
  },
  onRename: (id, name) => {
    dispatch(renameTrack(id, name));
  },
  onPlay: track => e => {
    dispatch(startPlaying());
    let playBackStartTime = Date.now();
    let currNote = 0;
    let timeElapsed;
    let interval = setInterval(() => {
      if(currNote < track.roll.length) {
        timeElapsed = Date.now() - playBackStartTime;
        if (timeElapsed >= track.roll[currNote].timeSlice) {
          dispatch(groupUpdate(track.roll[currNote].notes));
          currNote++;
        }
      } else {
        clearInterval(interval);
        dispatch(stopPlaying());
      }
    }, 1);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Jukebox);
