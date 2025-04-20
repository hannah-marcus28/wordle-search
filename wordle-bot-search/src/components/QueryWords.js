import "../style/QueryWords.css";
import React, { useState, useEffect } from "react";
import isMobile from "../utils/IsMobile.js";

const QueryWords = () => {
  const [wordMap, setWordMap] = useState({});
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    fetch('/words.json')
      .then(response => response.json())
      .then(data => setWordMap(data))
      .catch(error => console.error('Error loading word map:', error));

    setMobile(isMobile());
    const handleResize = () => setMobile(isMobile());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
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
          placeholder="Enter your first word results"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {result && <p>Result: {result}</p>}
      </div>
    </div>
  );
};

export default QueryWords;