import "./Styles/App.scss";
import Header from "./Containers/Header/Header";
import Main from "./Containers/Main/Main";
import { useState } from "react";

function App() {
  const [todoArray, set todoArray] = useState([])
  const [showTodo, setshowTodo] = useState(false)

const handleInput = (event) => {
  event.preventDefault();
  const todoItem = event.target[0].value
  if(todoItem.length > 0) {
    const newArr
  }
}


  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
