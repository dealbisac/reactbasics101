import React, { useRef, useState } from 'react';
import styles from './App.module.css';
import useRandomJokes from './useRandomJokes';

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const joke = useRandomJokes(firstName, lastName);

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };

  //Custom Hook
  //const joke = useRandomJokes("Dipendra", "Chand");

  return (
    <div>
      <center>
        <h1> The Joke Generator</h1>
        <h3>{joke}</h3>

        <form>
          <input placeholder="First Name" type="text" ref={firstNameRef} />
          <input placeholder="Last Name" type="text" ref={lastNameRef} />
          <button onClick={generateJoke}>Generate Jokes</button>
        </form>
      </center>
    </div>
  )
}

export default App
