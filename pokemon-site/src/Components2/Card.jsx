import axios from 'axios';
import React, {useEffect, useState} from 'react';
import ImgPokemon from '../Components/ImgPokemon';
import PokemonsTypesList from '../Components/PokemonsTypesList';
import '../Components/card.css';

export const Card = ({ pokemonUrl }) => {
    const [pokemonDetails, setPokemonDetails] = useState(undefined);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(pokemonUrl);
            setPokemonDetails(data);
        }
        fetchData()
    }, []);

    if(!pokemonDetails) {
        return null
    }
    return <div className={`pkmn-card ${pokemonDetails.types[0].type.name}-img`}>
        <div className='text-card'>
            <h2>{pokemonDetails.name}</h2>
            <PokemonsTypesList data={pokemonDetails.types} />
        </div>
        <ImgPokemon data={pokemonDetails} />
    </div>
}

export default Card;