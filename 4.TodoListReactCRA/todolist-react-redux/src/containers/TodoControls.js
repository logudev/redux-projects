import { connect } from 'react-redux';
import TodoControls from '../components/TodoControls';
import {setVisibility} from "../actions";

const mapStateToProps = (state, ownProps) => ({
    visibility: state.visibility
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setVisibility: (visibility) => dispatch(setVisibility(visibility))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoControls);