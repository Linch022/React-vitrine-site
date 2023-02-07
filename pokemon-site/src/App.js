import React, { useEffect, useState } from 'react';
import Main from './Components/Main';
import PokemonList from './Components/PokemonList';

const App = () => {
  const [getPokemonsDetails, setGetPokemonsDetails] = useState([]);
  const [allPokemonsDetails, setAllPokemonsDetails] = useState([]);

  useEffect(() => {
    setAllPokemonsDetails(getPokemonsDetails);
  }, [getPokemonsDetails]);

  return (
    <div className='app'>
      <PokemonList setGetPokemonsDetails={setGetPokemonsDetails} />
      {allPokemonsDetails.length > 0 ? (
        <Main allPokemonsDetails={allPokemonsDetails} />
      ) : null}
    </div>
  );
};

export default App;
