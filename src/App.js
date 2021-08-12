import './App.css';
import Header from './Header';

//BEM - Block Element Modifier

function App() {

  return (
    <div className="app">
      <Header />
      <h1 className="app__title">This is a title</h1>
      <h1 className="app__title--large">This is a large title</h1>
      <h1 className="app__title--small">This is small title</h1>
    </div>
  );
}

export default App;
