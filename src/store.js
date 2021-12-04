import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";
import { createReducer } from "@reduxjs/toolkit";

export const addTodo = createAction("ADD");
export const deleteTodo = createAction("DELETE");
export const complishTodo = createAction("COMPLISH");

const reducer = createReducer([], {
  [addTodo]: (state, { payload }) => [payload, ...state],
  [deleteTodo]: (state, { payload }) =>
    state.filter((item) => item.id !== payload.id),
  [complishTodo]: (state, { payload }) => {
    const item = state.find((item) => item.id === payload.id);
    item.isDone = !item.isDone;
  },
});

export default createStore(reducer);
