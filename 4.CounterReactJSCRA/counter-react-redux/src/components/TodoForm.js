import React from 'react';

const TodoForm = ({todo, updateCurrentTodo, addTodo}) => {
    const onTextChange = (e) => {
        updateCurrentTodo(e.target.value);
    };

    const onSubmit = (e) => {
      e.preventDefault();
      addTodo(todo);
    };

    return (
        <form onSubmit={onSubmit}>
            <input type='text' value={todo} onChange={onTextChange}/>
            <button onClick={onSubmit}>Add</button>
        </form>
    );
};

export default TodoForm;