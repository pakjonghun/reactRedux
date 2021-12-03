import { createStore } from "redux";
import shortid from "shortid";

export const ADD = "ADD";
export const DELETE = "DELETE";
export const COMPLISH = "COMPLISH";

export const addTodo = (content) => ({
  type: ADD,
  content,
  id: shortid.generate(),
  isDone: false,
});

export const deleteTodo = (id) => ({
  type: DELETE,
  id,
});

export const complishTodo = (id) => ({
  type: COMPLISH,
  id,
});

const reducer = (state = [], { type, id, isDone, content }) => {
  switch (type) {
    case ADD:
      return [{ id, isDone, content }, ...state];

    case DELETE:
      return state.filter((item) => item.id !== id);

    case COMPLISH:
      const newState = state.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isDone: !item.isDone,
          };
        }
        return item;
      });

      return newState;

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
