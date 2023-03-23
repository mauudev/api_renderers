import { useEffect, useState } from 'react';


export const usePokemonList = (url) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [previousUrl, setPreviousUrl] = useState(null);
    const [count, setCount] = useState(0);
    const [nextUrl, setNextUrl] = useState(null);

    useEffect(() => {
        try {
            const pokemonData = async () => {
                if(url) {
                    const response = await fetch(url);
                    const data = await response.json();
                    const { count, next, previous, results } = data;
                    setPokemonList(results);
                    setPreviousUrl(previous);
                    setNextUrl(next);
                    setCount(count);
                }
            };
            pokemonData();
        } catch (error) {
            console.log(`Error when fetching pokemon data: ${error}`)
        }
    }, [url])

    return { pokemonList, previousUrl, nextUrl, count };
}
