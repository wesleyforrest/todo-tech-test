import React from "react";
import "./Styles/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">My Todos</h1>
      <button className="reset-btn">Reset</button>
    </div>
  );
};

export default Header;
