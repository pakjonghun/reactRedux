import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { complishTodo, deleteTodo } from "../store";

const Todo = ({
  todo: { id, content, isDone },
  dDeleteTodo,
  dComplishTodo,
}) => {
  return (
    <Li onClick={() => dComplishTodo(id)} isDone={isDone} key={id}>
      {content}
      <button onClick={() => dDeleteTodo(id)}>삭제</button>
    </Li>
  );
};

const Li = styled.li`
  color: ${({ isDone }) => (isDone ? "red" : "black")};
`;

function mapDispatchProps(dispatch, { todo }) {
  console.log(todo);
  return {
    dComplishTodo: () => dispatch(complishTodo(todo.id)),
    dDeleteTodo: () => dispatch(deleteTodo(todo.id)),
  };
}

export default connect(null, mapDispatchProps)(Todo);
