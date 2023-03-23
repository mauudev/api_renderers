import React, { useState, useEffect } from 'react';
import SimpsonsCard from '../components/SimpsonsCard/SimpsonsCard';
import { useFetchSimpsonsQuotes } from '../hooks/useFetchSimpsonsQuotes';
import { v4 as uuidv4 } from 'uuid';
import { buildApiUrl } from '../utils/tools';


const URI_BASE = 'https://thesimpsonsquoteapi.glitch.me/quotes?';

const SimpsonsQuotesPage = () => {
    const [count, setCount] = useState(10);
    const [character, setCharacter] = useState(null);
    const [url, setUrl] = useState(buildApiUrl(count, character, URI_BASE));
    const [charOpChecked, setCharOptChecked] = useState(false);
    const quotes = useFetchSimpsonsQuotes(url);

    const handleCharOptChecked = () => {
        setCharOptChecked(!charOpChecked);
    }

    const handleCharacterInput = (event) => {
        const charName = event.target.value;
        const newUrl = buildApiUrl(count, charName, url);
        setUrl(newUrl);
        setCharacter(charName);
    }

    const handleCount = (event) => {
        const countVal = event.target.value;
        const newUrl = buildApiUrl(countVal, character, url);
        console.log(newUrl)
        setUrl(newUrl);
        setCount(countVal);
    }

    return (
        <div className='simpsons-page'>
            <h1>Welcome to the Simpsons quotes page !</h1>
            <h3>Select the number of quotes and/or the character name (if you want) to display some quotes!</h3>
            <div className='input-elements'>
                <label>
                    <input type="number" min="1" defaultValue={count} onChange={handleCount} />
                </label><br /><br /><br />
                <label>
                    <input type="checkbox"
                        defaultChecked={charOpChecked}
                        onChange={handleCharOptChecked}
                    />
                    Type a character
                </label><br />
                <input type="text" onChange={handleCharacterInput} disabled={!charOpChecked} />
            </div>
            <div className='quotes-container'>
                {
                    quotes.map(quote => {
                        return <SimpsonsCard key={uuidv4()} quoteData={quote} />
                    })
                }
            </div>
        </div>
    )
}

export default SimpsonsQuotesPage;
