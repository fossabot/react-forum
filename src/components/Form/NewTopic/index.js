import React, { Component } from 'react';

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
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.title}
          placeholder="Title"
          name="title"
        />
        <textarea
          name="message"
          id="message"
          onChange={this.handleChange}
          value={this.state.message}
          cols="30"
          rows="10"
        />
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default NewTopic;
