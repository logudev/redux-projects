import { connect } from 'react-redux';

import TodoForm from '../components/TodoForm';
import {addTodo, updateCurrentTodo} from "../actions";

const mapStateToProps = (state, ownProps) => ({
  todo: state.currentTodo
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateCurrentTodo: (currentTodo) => dispatch(updateCurrentTodo(currentTodo)),
    addTodo: (todo) => {
        dispatch(addTodo(todo));
        dispatch(updateCurrentTodo(''));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);