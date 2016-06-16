
import redux from 'redux'

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";

let addTodo = (text) => {
    return {
        type: ADD_TODO,
        text: text
    };
};

const boundAddTodo = (text) => dispatch(addTodo(text));