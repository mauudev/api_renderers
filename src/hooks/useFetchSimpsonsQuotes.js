import { useState, useEffect } from 'react';


export const useFetchSimpsonsQuotes = (url) => {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        try {
            if(url && url !== null) {
                const fetchQuotes = async (apiUrl) => {
                    const response = await fetch(apiUrl);
                    const quotesData = await response.json();
                    setQuotes(quotesData);
                }
                fetchQuotes(url);
            }
        } catch (error) {
            console.log(`Error when fetching data: ${error}`);
        }
        return () => { setQuotes([]) }
    }, [url])
    return quotes;
}
