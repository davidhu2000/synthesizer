import React from 'react';

class NoteKey extends React.Component {
  constructor({note, pressed}) {
    super();
    this.note = note;
    this.pressed = pressed;
  }

  render() {
    return (
      <li className={this.pressed}>{this.note}</li>
    );
  }
}

export default NoteKey;
