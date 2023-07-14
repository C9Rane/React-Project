import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React is so cool!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1> 
        Movies
      </h1>
      <p>favorites of the 90's:</p>
      <ul>
        <li>August Rush</li>
        <li>Forest Gump</li>
        <li>Full Metal Jacket</li>
      </ul>
    </div>
  );
}

export default App;
