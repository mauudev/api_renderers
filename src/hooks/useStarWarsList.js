import { useState, useEffect } from 'react';

export const useStarWarsList = (apiUrl) => {
    const [count, setCount] = useState(0);
    const [next, setNextUrl] = useState(null);
    const [previous, setPreviousUrl] = useState(null);
    const [results, setResults] = useState([]);

    useEffect(() => {
        try {
            const fetchCharacters = async (url) => {
                if(url && url !== null) {
                    const response = await fetch(url);
                    const data = await response.json();
                    const {count, next, previous, results} = data;
                    setCount(count);
                    setNextUrl(next);
                    setPreviousUrl(previous);
                    setResults(results);
                }
            }
            fetchCharacters(apiUrl);
        } catch (error) {
            console.log(`Error when fetching data: ${error}`);
        }

        return () => { apiUrl = null; }
    }, [apiUrl]);

    return { count, next, previous, results };
}
