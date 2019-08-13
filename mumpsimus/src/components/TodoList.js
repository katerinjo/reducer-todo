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
        {this.props.todos.map(todo => (
          <Todo todo={todo} updateFun={this.props.updateFun} />
        ))}
      </ul>
    );
  }
}

export default TodoList;