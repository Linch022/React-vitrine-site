import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PokemonsDetails from './PokemonsDetails';

const PokemonList = ({ setGetPokemonsDetails }) => {
  const [getPokemonsUrls, setGetPokemonsUrls] = useState([]);
  const [pokemonsData, setPokemonsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`
      );
      const urlsPokemonsArray = apiData.data.results.map(
        (pokemon) => pokemon.url
      );
      setGetPokemonsUrls(urlsPokemonsArray);
    };

    fetchData();
  }, []);

  useEffect(() => {
    setGetPokemonsDetails(pokemonsData);
  }, [setGetPokemonsDetails, pokemonsData]);

  return (
    <div>
      <PokemonsDetails
        getPokemonsUrls={getPokemonsUrls}
        setPokemonsData={setPokemonsData}
      />
    </div>
  );
};

export default PokemonList;

