import React from 'react';

import './Todo.css';

class Todo extends React.Component {
  constructor(props) {
    super();

    this.state = props.todo;
  }

  toggle = () => {
    this.props.updateFun({...this.state});
    this.setState({completed: !this.state.completed})
  }

  render() {
    return (
      <li
        onClick={this.toggle}
        className={this.state.completed && 'done'}
      >
        {this.state.task}
      </li>
    );
  }
}

export default Todo;