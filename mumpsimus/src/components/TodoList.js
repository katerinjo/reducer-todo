import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.list.map(todo => (
          <li onClick={() => this.props.doFun(todo)}>
            {todo.item + (todo.completed ? '\u2713' : '')}
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;