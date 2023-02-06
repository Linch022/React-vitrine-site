import React from 'react';
import ImgPokemon from './ImgPokemon';
import PokemonsTypesList from './PokemonsTypesList';

const Card = ({ pkmn }) => {
  console.log(pkmn);

  return (
    <div>
      {pkmn.map((pokemon) => (
        <div className='pkmn-card' key={pokemon.id}>
          <h2>{pokemon.name}</h2>
          <ImgPokemon data={pokemon} />
          <PokemonsTypesList data={pokemon.types} />
        </div>
      ))}
    </div>
  );
};

export default Card;

// useEffect(() => {
//   const fetchData = async () => {
//     const getPokemonData = await axios.get(pkmn);
//     setPokemonData(getPokemonData.data);
//     console.log(getPokemonData.data);
//   };
//   fetchData();
// }, []);
