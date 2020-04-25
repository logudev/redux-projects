import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from "../constants";

const todosReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_TODO: {
            const newTodo = {
                id: action.id,
                text: action.text,
                isCompleted: false
            };
            return [...state, newTodo];
        }
        case TOGGLE_TODO: {
            return state.map(todo => {
                if(todo.id === action.id) {
                    const toggledTodo = {...todo, isCompleted: !todo.isCompleted};
                    return toggledTodo;
                }
                return todo;
            });
        }
        case REMOVE_TODO: {
            return state.filter(todo => todo.id !== action.id);
        }
        default:
            return state;
    }
};

export default todosReducer;