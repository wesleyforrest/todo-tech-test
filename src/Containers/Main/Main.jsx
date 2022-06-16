import React from "react";
import InputField from "../InputField/InputField";
import ToDoItem from "../ToDoItem/ToDoItem";
import "./Styles/Main.scss";

const Main = () => {
  return (
    <div className="main">
      <InputField />
      <ToDoItem />
    </div>
  );
};

export default Main;
