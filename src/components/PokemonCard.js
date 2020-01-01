import React from 'react'
import { Card } from 'semantic-ui-react'

// change code from a class to a funtion
// add onClick - toggle Image to the first div tag
// display all pokemon names, urls (toggleImage) and hp stats

const PokemonCard = ({pokemon, toggleImage}) => { 
  const {name, stats, sprites, isClicked } = pokemon;
  const url = isClicked ? sprites.back : sprites.front;
  // const hp = stats.find(s => s.name === 'hp').value || 50
  // need hp not working - error message: can't find the value...

  return (
    <Card>
      <div onClick={() => toggleImage(pokemon)} >
        <div className="image">
          <img src={url} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header"> {name} </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {/* {hp} hp */}
            {50} hp
          </span>
        </div>
      </div>
    </Card>
  )
}

export default PokemonCard
