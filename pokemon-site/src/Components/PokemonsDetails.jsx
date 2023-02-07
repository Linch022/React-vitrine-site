import axios from 'axios';
import { useEffect } from 'react';

const PokemonsDetails = ({ setPokemonsData, getPokemonsUrls }) => {
  useEffect(() => {
    const fetchData = () => {
      const getPokemonsDetails = getPokemonsUrls.map((url) => axios.get(url));
      let pokemonsDataArray = [];
      getPokemonsDetails.forEach((promise) => {
        promise.then((response) => {
          pokemonsDataArray.push(response.data);
          if (pokemonsDataArray.length === getPokemonsUrls.length) {
            setPokemonsData(pokemonsDataArray);
          }
        });
      });
    };
    fetchData();
  }, [getPokemonsUrls, setPokemonsData]);
  return null;
};

export default PokemonsDetails;
