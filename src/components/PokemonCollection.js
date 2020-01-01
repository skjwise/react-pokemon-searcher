import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

// pokemon data and toggle Image have been passed into this file. 
// change from class to a functional component - map through all pokemons
// lastly, pass toggle image and each pokemon down to the PokemonCard Component.

const PokemonCollection = ({ pokemon, toggleImage }) => {
  return (
  <Card.Group itemsPerRow={6}>
    {/* <h1>Hello From Pokemon Collection</h1> */}
    {pokemon.map(pokemon => (
      <PokemonCard key={pokemon.id} pokemon={pokemon} toggleImage={toggleImage} />
    ))}
  </Card.Group>
  )
}

export default PokemonCollection
