import { useEffect, useState } from 'react';


export const useFetchPokemon = (selectedPokemonUrl) => {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const fetchPokemon = async () => {
            try {
                if (selectedPokemonUrl) {
                    const response = await fetch(selectedPokemonUrl);
                    const data = await response.json();
                    if (isMounted) {
                        setPokemonData(data);
                    }
                }
            } catch (error) {
                console.log(`Error when fetching pokemon data: ${error}`)
            }
        };
        fetchPokemon();

        return () => {
            isMounted = false;
            setPokemonData(null);
        };
    }, [selectedPokemonUrl]);

    return pokemonData;
};
