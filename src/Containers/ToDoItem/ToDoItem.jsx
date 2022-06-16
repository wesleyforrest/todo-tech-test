import React from "react";
import "./Styles/ToDoItem.scss";

const ToDoItem = () => {
  return (
    <div className="todo-container">
      <div className="todo-container__item">
        <h1 className="todo-container__item-text">Hello</h1>
        <button className="todo-container__item-btn del-btn">Del</button>
      </div>
    </div>
  );
};

export default ToDoItem;
