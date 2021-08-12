import './App.css';

//BEM - Block Element Modifier

function App() {

  const name = "Dipendra";
  const isMale = true;

  // userdefined function
  function getString(user) {
    if (user) {
      return <h1>Hello,  {user}!</h1>;
    } else {
      return <h1>Hello, Stranger.</h1>;
    }

  }

  return (
    <div className="app">
      {getString()}
      <h2>You are a {isMale ? "Male" : "Female"}</h2>
    </div>
  );
}

export default App;
