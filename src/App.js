import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Pokemon } from './Pokemon.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      pokemons: [],
      pokedex: []
    }
  }

  componentWillMount(){
    fetch("https://pokeapi.co/api/v2/pokemon?limit15")
    .then(response => {
      console.log(response)
      response.json()
    }
    ).then(pokemons => this.setState({
        pokemons: pokemons.result
    }))
  }

  catchThem = pokemon => {
    const randy = Math.floor(Math.random() *100);
    if(randy % 2 == 0){
      this.setState({
        pokdex: this.state.pokedex.concat(pokemon)
      });
    } else {
      alert('Pokemon salvaje ha escapado')
    }
  }

  render() {
    return (
      <div className="App">
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-10">
            <h4 className="title is-4">
            Pokemons Capturados: {this.state.pokedex.length}
            </h4>
            <h5 className="subtitle is-5">
            Atrapa al Pokemon
            </h5>
            <div className="pokemon-list">
              {this.state.pokemons.map((pokemon,index) => {
                <Pokemon key={index}  url={pokemon.url} />
              })}
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
  }
}

export default App;
