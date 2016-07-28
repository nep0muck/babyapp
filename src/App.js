import React from 'react';

export default class extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <p>Count: { this.state.count }</p>
        <button onClick={() => this.increment()}>Update</button>
      </div>
    );
  }
}