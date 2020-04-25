import {SET_VISIBILITY, VISIBILITY} from "../constants";

const visibilityReducer = (state = VISIBILITY.ALL, action) => {
    if(action.type === SET_VISIBILITY) {
        return action.visibility
    }
    return state;
};

export default visibilityReducer;