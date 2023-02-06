import React from 'react';
import Card from './Card';
import Header from './Header';
import './Main.css';

const Main = ({ allPokemonsDetails }) => {
  return (
    <div className='background'>
      <Header />
      <div className='pokemon-card-container'>
        {allPokemonsDetails.map((pkmn) => {
          return <Card key={pkmn.name} pkmn={pkmn} />;
        })}
      </div>
    </div>
  );
};

export default Main;
