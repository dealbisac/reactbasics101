import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // count += 1;  //wrong way

    setCount(count + 1);  //correct way

  }

  const decrement = () => {
    // count -= 1;  // wrong way

    setCount(count - 1); //right way
  }

  return (
    <div className="app">
      <h1>Welcome to my counter app</h1>
      <p>The count is {count}</p>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
    </div>
  )
}

export default App;
