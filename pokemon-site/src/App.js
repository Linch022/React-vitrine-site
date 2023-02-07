import React from 'react';
import Header from './Components/Header';
import PokemonList from './Components2/PokemonList';

const App = () => {
  return <div className='background'>
      <Header />
      <div className='pokemon-card-container'>
        <PokemonList />
      </div>
    </div>
};

export default App;
