// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props) {
    super();
    console.log('props passed to list', props)
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