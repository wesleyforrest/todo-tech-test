import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import "./Styles/InputField.scss";

const InputField = (props) => {
  const { userInput } = props;

  return (
    <div className="input-section">
      <form className="form" action="input">
        <input
          className="form__input"
          type="text"
          placeholder="Add your todo item here..."
          onSubmit={handleSubmit}
        />
        <button className="form__add add-btn">+</button>
      </form>
    </div>
  );
};

export default InputField;
