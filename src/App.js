import React, { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();  //prevents refresh


    // console.log(`This is input ${input}`);
    setTodos([...todos, input]);
    setInput("");
  }



  return (
    <div className="app">
      <h1>Welcome to my TODO List</h1>
      <form>
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
        <button type="submit" onClick={addTodo}>Add Todo</button>
      </form>


      <h2>List of Todos</h2>
      {todos.map((todo) => (
        <p>{todo}</p>
      ))}
    </div>
  );
}
export default App;
