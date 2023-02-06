import React, { useEffect, useState } from 'react';
import Card from './Components/Card';
import PokemonList from './Components/PokemonList';

const App = () => {
  const [getPokemonsDetails, setGetPokemonsDetails] = useState([]);
  const [allPokemonsDetails, setAllPokemonsDetails] = useState([]);

  useEffect(() => {
    setAllPokemonsDetails(getPokemonsDetails);
  }, [getPokemonsDetails]);

  return (
    <div>
      <h1>Pokedex</h1>
      <PokemonList setGetPokemonsDetails={setGetPokemonsDetails} />
      {allPokemonsDetails.length > 0 ? (
        <Card pkmn={allPokemonsDetails} />
      ) : null}
    </div>
  );
};

export default App;
