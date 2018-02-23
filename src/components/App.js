import React, { Component } from 'react';
import ThreadList from './ThreadList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      threads: [],
    };
  }
  render() {
    const { threads } = this.state;

    return (
      <ThreadList threads={threads} />
    );
  }
}

export default App;
