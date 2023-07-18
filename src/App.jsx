import './App.css';
import React, {useState} from 'react';
import FilmsList from './components/filmslist';

function App(props) {
  const [list, setList] = useState(["ready", "set", "GO!"]);
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setList([...list, text]);
    setText("");
  }

  const handleChange = (e) => {
    setText(e.target.value);
  }

  return (
    <div className="appDiv">
      <h1>Hello World</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
      <ul className="itemList">
        {list.map((item, index) => (
          <li key={item + index}>{item}</li>
        ))}
      </ul>
      <FilmsList></FilmsList>
    </div>
  );
}

export default App;
