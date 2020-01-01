import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const API = 'http://localhost:3000/pokemon';

class PokemonPage extends React.Component {
  state ={
    pokemons: [],
    searchInput: ''
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(pokemons => this.setState({pokemons: pokemons}))
  }

  // handle search function to be passed down to Search component
  handleSearch = e => {
    this.setState({searchInput: e.target.value})
  }

  // toggle Image - goes to Pokemon Collection 
  toggleImage = pokemon => {
    const collection = this.state.pokemons;
    const index = collection.indexOf(pokemon)
    this.setState({pokemons: [
      ...collection.slice(0, index),
      // initially pokemon.isClicked is undefined; inverting that falsey value makes it true
      {...pokemon, isClicked: !pokemon.isClicked},
      ...collection.slice(index, 1)
    ]})
  }

  // add pokemon - passes down to PokemonForm
  addPokemon = pokemon => {
    this.setState({pokemons: [...this.state.pokemons, pokemon]})
  }

  render() {
    const selectedPokemon = this.state.pokemons.filter(p => p.name.includes(this.state.searchInput))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search onChange={this.handleSearch} />
        <br />
        <PokemonCollection pokemon={selectedPokemon} toggleImage={this.toggleImage} />
      </Container>
    )
  }
}

export default PokemonPage
