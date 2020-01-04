import React from "react";

const TodoItem = props => {
  const completedStyle = {
    fontStyle: "italic",
    color: "grey",
    textDecoration: "line-through"
  };
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="input-group mb-4">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <input
              type="checkbox"
              checked={props.ToDo.completed}
              onChange={() => props.change(props.ToDo.id)}
            />
            <h6 style={props.ToDo.completed ? completedStyle : null}>
              {props.ToDo.text}
            </h6>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TodoItem;
