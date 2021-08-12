import React, { useState } from 'react'
import App from './App';

function AppClass() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>Welcome to my counter app</h1>
            <p>The count is {count}</p>
            <button onClick={increment}> + </button>
            <button onClick={decrement}> - </button>
        </div>
    )
}

export default AppClass;
