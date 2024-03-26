import { useState } from 'react';
import './App.css';
import Card from './PokemonComponents/CardComponents/Card';

function App() {
  let [pokemon, setPokemon] = useState({name: "", image: ""});

  return (
    <>
      <Card pokemon={pokemon} setPokemon={setPokemon} />
    </>
  );
}

export default App;
