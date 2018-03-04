import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';

class NewTopic extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      message: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: [value] });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          onChange={this.handleChange}
          value={this.state.title}
          placeholder="Title"
          name="title"
          margin="normal"
        />
        <TextField
          name="message"
          id="message"
          multiline
          rows="4"
          margin="normal"
          placeholder="message"
          onChange={this.handleChange}
          value={this.state.message}
        />
        <Button type="submit" variant="raised" color="primary" onClick={this.handleSubmit}>
          Submit
          <Icon>send</Icon>
        </Button>
      </form>
    );
  }
}

export default NewTopic;
