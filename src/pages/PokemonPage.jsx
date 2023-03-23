import React, { useState, useEffect, useCallback, Suspense } from 'react';
import PokemonCard from '../components/PokemonCard/PokemonCard';
import { usePokemonList } from '../hooks/usePokemonList';
import { capitalize } from '../utils/tools';
import { useFetchPokemon } from '../hooks/useFetchPokemon';
import { v4 as uuidv4 } from 'uuid';


const URI = 'https://pokeapi.co/api/v2/pokemon';

const PokemonPage = () => {
    const [uri, setUri] = useState(URI);
    const [selectedPokemonUrl, setSelectedPokemonUrl] = useState(null);
    const { pokemonList, previousUrl, nextUrl, count } = usePokemonList(uri);
    const pokemonData = useFetchPokemon(selectedPokemonUrl);

    const handleSelectedPokemon = (url) => {
        setSelectedPokemonUrl(url);
    };

    const handleNextBtn = () => {
        if (nextUrl) {
            setUri(nextUrl);
            setSelectedPokemonUrl(null);
        }
    };

    const handlePreviousBtn = () => {
        if (previousUrl) {
            setUri(previousUrl);
            setSelectedPokemonUrl(null);
        }
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className='pokemon-list'>
                <h1>Pokemon List</h1>
                <h2>Total: {count}</h2>
                <ul>
                    {
                        pokemonList.map(pokemon => {
                            return (
                                <li key={uuidv4()}>
                                    <p onClick={() => handleSelectedPokemon(pokemon.url)}>{capitalize(pokemon.name)}</p>
                                </li>
                            )
                        })

                    }
                </ul>
            </div>
            <PokemonCard key={uuidv4()} pokemonData={pokemonData} />
            <div className='pagination-control'>
                <button onClick={handlePreviousBtn} disabled={!previousUrl}>Previous</button>
                <button onClick={handleNextBtn} disabled={!nextUrl}>Next</button>
            </div>
        </Suspense>
    );
}

export default PokemonPage;