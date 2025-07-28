import React, { useState } from 'react';
import './App.css';

function App() {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    const response = await fetch('http://localhost:8000/joke');
    const data = await response.json();
    setJoke(data.joke);
  };

  return (
    <div className="App">
      <h1>Random Joke Generator</h1>
      <button onClick={fetchJoke}>Get Joke</button>
      {joke && <p>{joke}</p>}
    </div>
  );
}

export default App;
