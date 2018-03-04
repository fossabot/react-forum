import React, { Component } from 'react';
import Reboot from 'material-ui/Reboot';
import Button from 'material-ui/Button';
import ThreadList from './ThreadList';
import NewTopic from './Form/NewTopic';

class App extends Component {
  constructor() {
    super();
    this.state = {
      threads: [],
      showNewTopicForm: false,
    };
  }
  render() {
    const { threads } = this.state;

    return (
      <div>
        <Reboot />
        <ThreadList threads={threads} />
        <Button color="primary" variant="raised" onClick={() => !this.state.showNewTopicForm && this.setState({ showNewTopicForm: true })}>
          New Thread
        </Button>
        {this.state.showNewTopicForm && <NewTopic />}
      </div>
    );
  }
}

export default App;
