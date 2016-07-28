import React from 'react';

export default class TimeLineList extends React.Component {
  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="Wieviel gefüttert?" ref="createInput" />
        <button>Abschicken</button>
      </form>
    );
  }

  handleCreate(event) {
    // prevent default behaviour from submit button
    event.preventDefault();

    this.props.createItem(this.refs.createInput.value);
    this.refs.createInput.value = '';
  }
}