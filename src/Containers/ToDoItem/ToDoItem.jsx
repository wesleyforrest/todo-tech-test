import React from "react";
import "./Styles/ToDoItem.scss";

const ToDoItem = () => {
  return (
    <div className="todo-container">
      <div className="todo-container__item">
        <h1 className="todo-container__item-text">Hello</h1>
        <input
          className="todo-container__item-checkbox checkbox"
          type="checkbox"
        />
      </div>
    </div>
  );
};

export default ToDoItem;
