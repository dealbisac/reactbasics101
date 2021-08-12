import React, { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [input, setInput] = useState(""); //1
  const [todos, setTodos] = useState([]); //2
  const [randomNo, setRandomNo] = useState(Math.floor(Math.random() * 101)); //<--Random number between 0 to 100 //3

  //Rules of Hooks
  //1. Only call hooks( useState & useEffect) at the TOP Level
  // - This means dont call hooks inside LOOP_TYPES, conditions or nested functions
  // - Always use hooks at the top level of react functions
  // - By following this rule, you ensure hooks are called in the same order each time a component renders
  // - This allows react to correctly preserve the state of hooks between useState / useEffect calls


  // 2/ Don't call hooks from regulat JS functions
  // - Call hooks from React FC's (functional components)
  // - Call hooks from yjhe custom hooks

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
