import React from 'react';

// class NoteKey extends React.Component {
//   constructor({note, pressed}) {
//     super();
//     this.note = note;
//     this.pressed = pressed;
//   }
//
//   render() {
//     console.log(this.pressed);
//     return (
//       <li className={'note-key ' + this.pressed}>{this.note}</li>
//     );
//   }
// }

const NoteKey = ({note, pressed}) => (
  <li className={'note-key' + pressed}>{note}</li>
);

export default NoteKey;
