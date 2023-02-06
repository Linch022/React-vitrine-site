import React from 'react';
import ImgPokemon from './ImgPokemon';
import PokemonsTypesList from './PokemonsTypesList';
import './card.css';

const Card = ({ pkmn }) => {
  return (
    <div className='pkmn-card' key={pkmn.id}>
      <h2>{pkmn.name}</h2>
      <ImgPokemon data={pkmn} />
      <PokemonsTypesList data={pkmn.types} />
    </div>
  );
};

export default Card;
