import React from 'react';
import ImgPokemon from './ImgPokemon';
import PokemonsTypesList from './PokemonsTypesList';
import './card.css';

const Card = ({ pkmn }) => {
  return (
    <div className={`pkmn-card ${pkmn.types[0].type.name}-img`} key={pkmn.id}>
      <div className='text-card'>
        <h2>{pkmn.name}</h2>
        <PokemonsTypesList data={pkmn.types} />
      </div>
      <ImgPokemon data={pkmn} />
    </div>
  );
};

export default Card;
