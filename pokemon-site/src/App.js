import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Components/Card';

const App = () => {
  const [getPkmnUrls, setGetPkmnUrls] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=9&offset=0`
      );
      const pkmnArray = apiData.data.results.map((pokemon) => pokemon.url);
      setGetPkmnUrls(pkmnArray);
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>Pokedex</h1>
      {getPkmnUrls.map((pkmn) => (
        <Card key={pkmn} pkmn={pkmn} />
      ))}
    </div>
  );
};

export default App;
