import {UPDATE_CURRENT_TODO} from "../constants";

const currentTodosReducer = (state = '', action) => {
  if(action.type === UPDATE_CURRENT_TODO) {
      return action.currentTodo;
  }
  return state;
};

export default currentTodosReducer;