import React from "react";
import "./Styles/InputField.scss";

const InputField = () => {
  return (
    <div className="input-section">
      <form className="form" action="input">
        <input
          className="form__input"
          type="text"
          placeholder="Add your todo item here..."
        />
        <button className="form__add add-btn">+</button>
      </form>
    </div>
  );
};

export default InputField;
