import {ADD_TODO, SET_VISIBILITY, TOGGLE_TODO, UPDATE_CURRENT_TODO, REMOVE_TODO} from "../constants";

let todoId = 0;

export const addTodo = text => {
    return {
        type: ADD_TODO,
        text,
        id: todoId++
    };
};

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        id
    };
};

export const removeTodo = id => {
    return {
        type: REMOVE_TODO,
        id
    }
};

export const setVisibility = visibility => {
    return {
        type: SET_VISIBILITY,
        visibility
    };
};

export const updateCurrentTodo = currentTodo => {
    return {
        type: UPDATE_CURRENT_TODO,
        currentTodo
    };
};