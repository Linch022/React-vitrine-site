import { useEffect, useState } from "react"
import { Card } from "./Card";
import { fetchData } from "./utils";

const PokemonList = () => {
    const [pokemonUrls, setPokemonUrls] = useState([]);
    const [offset, setOffset] = useState(0);
    const [choice, setChoice] = useState('pokemon');
    useEffect(() => {
        fetchData(choice, {offset}, (response) => setPokemonUrls([...pokemonUrls, ...response]));
    }, [offset, choice]);

    
    return <>
        <button onClick={() => setOffset(offset + 1)}>Next Pokemon</button>
        <button onClick={() => {
            setPokemonUrls([]);
            setChoice("types");
        }}>Change to Types</button>
        <button onClick={() => {
            setPokemonUrls([]);
            setChoice("pokemon");
        }}>Change to Pokemon</button>
        {pokemonUrls.map((url) => <Card key={url} pokemonUrl={url} />)}
    </>
}

export default PokemonList;































