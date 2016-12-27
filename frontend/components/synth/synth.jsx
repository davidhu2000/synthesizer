import React from 'react';
import * as TONE_NAMES from '../../util/tones.js';
const TONES = TONE_NAMES.TONES;
const NOTE_NAMES = TONE_NAMES.NOTE_NAMES;
import Note from '../../util/note.js';
import $ from 'jquery';

class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.notes = this.createNotes();
  }

  onKeyDown(e) {
    this.props.keyPressed(e.key);
  }

  onKeyUp(e) {
    this.props.keyReleased(e.key);
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup',   e => this.onKeyUp(e));
  }

  playNotes() {
    let store = this.props.notes;
    NOTE_NAMES.forEach( (note, idx) => {
      if (store.indexOf(note) === -1){
        this.notes[idx].stop();
      } else {
        this.notes[idx].start();
      }
    });
  }

  createNotes() {
    let notes = [];
    NOTE_NAMES.forEach( note => {
      let noteNode = new Note(TONES[note]);
      notes.push(noteNode);
    });
    return notes;
  }

  render() {
    this.playNotes();
    return (
      <div>
        Playing notes
      </div>
    );
  }
}

export default Synth;
