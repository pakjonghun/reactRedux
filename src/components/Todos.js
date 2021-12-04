import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { complishTodo, deleteTodo, todos } from "../store";

const Todo = ({
  todo: { id, content, isDone },
  dDeleteTodo,
  dComplishTodo,
}) => {
  return (
    <li key={id}>
      <Span onClick={() => dComplishTodo(id)} isDone={isDone}>
        {content}
      </Span>
      <button onClick={() => dDeleteTodo(id)}>삭제</button>
    </li>
  );
};

const Span = styled.span`
  color: ${({ isDone }) => (isDone ? "red" : "black")};
`;

function mapDispatchProps(dispatch, { todo }) {
  return {
    dComplishTodo: () => dispatch(todos.actions.complete({ id: todo.id })),
    dDeleteTodo: () => dispatch(todos.actions.delete({ id: todo.id })),
  };
}

export default connect(null, mapDispatchProps)(Todo);
