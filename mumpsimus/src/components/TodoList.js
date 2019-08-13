// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

class TodoList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ul>
        {this.props.list.map(todo => (
          <li onClick={() => this.props.doFun(todo)}>
            {todo.item + (todo.completed ? '&check;' : '')}
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;