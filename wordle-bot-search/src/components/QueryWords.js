import "../style/QueryWords.css";
import React, { useState, useEffect } from "react";
import isMobile from "../utils/IsMobile.js";

const QueryWords = () => {
    const [wordMap, setWordMap] = useState({});
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        console.log("useEffect ran")
        fetch(process.env.PUBLIC_URL + '/words.json')
            .then(response => response.json())
            .then(data => {
                console.log("Fetched wordMap:", data);
                setWordMap(data);
            })
            .catch(error => console.error('Error loading word map:', error));

        setMobile(isMobile());
        const handleResize = () => setMobile(isMobile());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        const trimmedInput = input.trim();
        console.log("Searching for:", trimmedInput);
        const mappedValue = wordMap[trimmedInput];
        setResult(mappedValue || 'No match found');
    };

    return (
        <div className={mobile ? 'query-words-mobile' : 'query-words'}>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Example: GYYXX"
                />
                <button type="submit">Search</button>
            </form>
            <div>
                {result && <p>You should use: {result}</p>}
            </div>
        </div>
    );
};

export default QueryWords;