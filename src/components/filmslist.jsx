import { Component } from 'react';

export default class FilmsList extends Component{

    constructor() {
        super();
        this.state = {
            list: []
        }
        this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e){
      this.setState({text: e.target.value});
    }
    
    getFilms(){
        fetch("https://studioghibliapi-d6fc8.web.app/films")
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((films) => {
            console.log(films)
            this.setState({list: films})
            console.log(this.state);
        })
        .catch((err) => console.error(err))
        console.log(this.state.list);
    }
    

    componentDidMount() {
        this.getFilms()
    }

    render() {
      return (
        <ul>
            {this.state.list.map((film) => {
            return <li key={film.id}>{film.title}</li>;
            })}
        </ul>
      );
    }
  }