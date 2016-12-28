import React from 'react';
import * as TONE_NAMES from '../../util/tones.js';
const TONES = TONE_NAMES.TONES;
const NOTE_NAMES = TONE_NAMES.NOTE_NAMES;
import Note from '../../util/note.js';
import $ from 'jquery';
import NoteKey from './note_key.jsx';

class Synth extends React.Component {
  constructor(props) {
    super(props);

    this.addNotes = props.addNotes;
    this.notes = this.createNotes();
  }

  onKeyDown(e) {
    this.props.keyPressed(e.key);
    if (this.props.isRecording) this.addNotes(this.props.notes);
  }

  onKeyUp(e) {
    this.props.keyReleased(e.key);

    if (this.props.isRecording) this.addNotes(this.props.notes);
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

  pressed(note) {
    let pressed = this.props.notes.indexOf(note) !== -1 ? ' pressed' : '';
    // console.log(pressed);
    return pressed;
  }

  render() {
    this.playNotes();
    return (
      <div className='synth'>
        <ul className="note-key-list">
          {
            NOTE_NAMES.map((note, idx) => (
              <NoteKey key={idx} note={note} pressed={this.pressed(note)} />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Synth;
