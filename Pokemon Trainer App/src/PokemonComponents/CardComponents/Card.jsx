import { useState, useEffect } from 'react';
export default function Card() {
  let [pokemon, setPokemon] = useState('');
  useEffect(() => {}, []);

  //Functions for handling events
  let handleChange = (e) => {
    setPokemon(e.target.value)
  }

  return (
    <div>
      <h2>Blastoise</h2>
      <img
        src='https://i.pinimg.com/originals/d3/6e/6f/d36e6f74d9ade37082eb7234cb6dcc22.png'
        alt='pokemon'
      />
      <div>
        <input type='text' value={pokemon} onChange={handleChange} />
        <button>Search Pokedex</button>
      </div>
    </div>
  );
}
