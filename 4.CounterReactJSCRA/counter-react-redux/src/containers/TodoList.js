import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import {toggleTodo, removeTodo} from "../actions";

const mapStateToProps = (state, ownProps) => ({
    todos: state.todos,
    visibility: state.visibility
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    toggleTodo: (id) => dispatch(toggleTodo(id)),
    removeTodo: (id) => dispatch(removeTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);