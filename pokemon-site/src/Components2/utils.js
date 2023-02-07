import axios from "axios";

export  const fetchData = async (type, {offset}, callback) => {
    if(type === 'pokemon') {
        const {data: {results}} = await axios.get(
                `https://pokeapi.co/api/v2/pokemon?limit=1&offset=${offset}`
            );
            const urlsPokemonsArray = results.map(
                (pokemon) => pokemon.url
            );
            callback(urlsPokemonsArray);
    }

    if(type === 'types') {
        const {data: {pokemon}, data} = await axios.get(
                `https://pokeapi.co/api/v2/type/3`
            );
            console.log(data)
            const urlsPokemonsArray = pokemon.map(
                ({pokemon}) => pokemon.url
            );
        callback(urlsPokemonsArray);
    }
} 