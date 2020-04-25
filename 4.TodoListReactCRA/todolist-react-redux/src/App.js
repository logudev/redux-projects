import React from 'react';
import TodoForm from './containers/TodoForm';
import TodoList from './containers/TodoList';
import TodoControls from './containers/TodoControls';

function App() {
  return (
    <div>
      <TodoForm />
      <hr/>
      <TodoList />
      <hr/>
      <TodoControls />
    </div>
  );
}

export default App;
