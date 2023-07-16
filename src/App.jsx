import './App.css';
import React from 'react';
import FilmsList from './components/filmslist';

class App extends React.Component {

  onSubmit(HTMLSubmitEvent){
    HTMLSubmitEvent.preventDefault();
    this.setState(({
      list: [...this.state.list, this.state.text],
      text:""
    }));
  }

  constructor (){
    super();
    this.state = {
      list: ["ready", "set", "GO"],
      text: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({text: e.target.value});
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <form onSubmit={this.onSubmit}>
          <input 
            type = "text" 
            value = {this.state.text} 
            onChange = {this.handleChange}
          />
          <button type = "submit">Add</button>
        </form>
        <ul>
          {this.state.list.map((item, index) => (
          <li key={item + index}>{item}</li>
          ))}
        </ul>
        <FilmsList></FilmsList>
      </div>
    );
  }
}

export default App;
