import React, { useState, useEffect } from 'react';
import { useStarWarsList } from '../hooks/useStarWarsList';
import StarWarsCard from '../components/StarWarsCard/StarWarsCard';
import { v4 as uuidv4 } from 'uuid';


const URI = 'https://swapi.dev/api/people';

const StarWarsPage = () => {
    const [currentUrl, setCurrentUrl] = useState(URI);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const { count, next, previous, results } = useStarWarsList(currentUrl);
    
    const handlePreviousBtn = () => {
        setSelectedCharacter(null);
        setCurrentUrl(previous);
    }

    const handleNextBtn = () => {
        setSelectedCharacter(null);
        setCurrentUrl(next);
    }

    const handleSelectedCharacter = (character) => {
        setSelectedCharacter(character)
    }

    return (
        <div className='starwars-page'>
            <h1>StarWars Characters</h1>
            <h2>Total: {count}</h2>
            <div className='characters'>
                <ul>
                    {
                        results.map(character => {
                            return (
                                <li key={uuidv4()}>
                                    <p onClick={ () => {handleSelectedCharacter(character)} }>{character.name}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            { selectedCharacter && <StarWarsCard characterData={selectedCharacter} /> }
            <div className='pagination-control'>
                <button onClick={handlePreviousBtn} disabled={!previous}>Previous</button>
                <button onClick={handleNextBtn} disabled={!next}>Next</button>
            </div>
        </div>
    )
}

export default StarWarsPage;