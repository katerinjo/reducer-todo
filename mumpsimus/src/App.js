import React, { useReducer } from 'react';
import './App.css';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import { initState, reduce } from './reducers/itemReducer';

function App() {
  const [state, dispatch] = useReducer(reduce, initState);
  return (
    <div>
      <h2>Welcome to your Todo App!</h2>
      <TodoList list={state.list} />
      <TodoForm subFun={item => dispatch({type: 'ADD', item})}/>
      <button>clear</button>
    </div>
  );
}

export default App;
