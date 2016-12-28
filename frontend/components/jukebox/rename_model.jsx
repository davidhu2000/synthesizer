import React from 'react';

class RenameModal extends React.Component {
  constructor(props) {
    super(props);
    this.tracks = props.tracks;
    this.onRename = props.onRename;
    this.state = {name: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleChange(e) {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let modal = document.getElementById('modal');
    let trackId = modal.getAttribute('trackId');
    modal.className = 'hidden';
    modal.removeAttribute('trackId');
    this.onRename(trackId, this.state.name);
    this.setState({name: ''});
  }

  render() {
    return (
      <div id='modal' className='hidden'>
        <span className='modal-title'>{'What is the new name?'}</span>
        <form onSubmit={this.handleSubmit}>
          <input type='text'
                 value={this.state.name}
                 className='modal-input'
                 onChange={this.handleChange}></input>

          <input className='modal-button' type='submit' value='Submit'>
          </input>

        </form>
      </div>
    );
  }
}

export default RenameModal;
