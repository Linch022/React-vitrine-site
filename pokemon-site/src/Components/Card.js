import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './card.css';
import TypesList from './TypesList';

const Card = ({ pkmn }) => {
  const [pokemon, setPokemon] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const pokemonData = await axios.get(pkmn);
      setPokemon(pokemonData.data);
      console.log(pokemonData.data);
    };
    fetchData();
  }, []);
  if (!pokemon) {
    return;
  }
  return (
    <div className='pkmn-card'>
      <h2>{pokemon.name}</h2>
      <img
        className='img-pokemon'
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
      />
      <TypesList types={pokemon.types} />
    </div>
  );
};

export default Card;
