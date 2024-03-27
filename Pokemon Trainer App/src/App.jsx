import { useState } from 'react';
import './App.css';
import Card from './PokemonComponents/CardComponents/Card';

function App() {
  let [pokemon, setPokemon] = useState('');
  let [pokemonData, setPokemonData] = useState([]);

  return (
    <div>
      <Card
        pokemon={pokemon}
        setPokemon={setPokemon}
        pokemonData={pokemonData}
        setPokemonData={setPokemonData}
      />
    </div>
  );
}

export default App;
