import React from 'react';
import {VISIBILITY} from "../constants";

const TodoList = ({todos, visibility, toggleTodo, removeTodo}) => {

    const completedTodoStyle = {
        textDecoration: "line-through",
        cursor: "pointer"
    };

    const defaultTodoStyle = {
        cursor: "pointer"
    };

    const getTodos = () => {

        let todoList = todos;
        switch (visibility) {
            case VISIBILITY.COMPLETED: {
                todoList = todos.filter(todo => todo.isCompleted);
                break;
            }
            case VISIBILITY.OPEN: {
                todoList = todos.filter(todo => !todo.isCompleted);
                break;
            }
            default:
                todoList = todos;
        }

        return todoList.map(todo =>
            <li key={'todo_'+todo.id} id={'todo_'+todo.id} style={{marginBottom: "2px"}}>
                <div style={{userSelect: "none"}}>
                    <span
                        style={(visibility === VISIBILITY.ALL && todo.isCompleted) ? completedTodoStyle : defaultTodoStyle}
                        onClick={() => toggleTodo(todo.id)}>
                        {todo.text}
                    </span>
                    <span
                        style={{fontSize: "12px", marginLeft: "7px", cursor: "pointer"}}
                        onClick={() => removeTodo(todo.id)}>
                        <i className={"fa fa-close"}/>
                    </span>
                </div>

            </li>);
    };

    return (
        <ul>
            {getTodos(visibility)}
        </ul>
    )
};

export default TodoList;