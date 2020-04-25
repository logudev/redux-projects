import { combineReducers } from 'redux';
import todos from './todos';
import visibility from './visibility';
import currentTodo from './currentTodo';

const rootReducer = combineReducers({
    todos,
    visibility,
    currentTodo
});

export default rootReducer;