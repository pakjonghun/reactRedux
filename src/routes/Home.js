import React, { useCallback } from "react";
import { connect } from "react-redux";
import shortid from "shortid";
import Todo from "../components/Todos";
import { useInput } from "../hooks/useInput";
import { addTodo } from "../store";

const Home = ({ state, dAddTodo }) => {
  const { value: content, onChange, setValue } = useInput("");
  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dAddTodo(content);
      setValue("");
    },
    [content, dAddTodo, setValue]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={content} onChange={onChange} />
        <input type="submit" value="입력" />
      </form>
      <ul>
        {state.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return { state };
}

export function mapDispatchProps(dispatch) {
  return {
    dAddTodo: (content) =>
      dispatch(addTodo({ content, id: shortid.generate(), isDone: false })),
  };
}

export default connect(mapStateToProps, mapDispatchProps)(Home);
