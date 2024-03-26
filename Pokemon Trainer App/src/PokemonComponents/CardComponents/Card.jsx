import { useState, useEffect } from 'react';
export default function Card({
  pokemon,
  setPokemon,
  pokemonData,
  setPokemonData,
}) {
  let baseURL = 'https://pokeapi.co/api/v2/pokemon/';

  useEffect(() => {
    fetchPokemonData();

    async function fetchPokemonData() {
      try {
        let response = await fetch(`${baseURL}${pokemon}`);
        if (!response.ok) {
          throw new Error('Pokemon Data Not Found!');
        }
        let data = await response.json();
        console.log(data)
        setPokemonData([...pokemon, data]);
      } catch (error) {
        console.log(error);
      }
    }
  }, [pokemon]);

  console.log();

  //Functions for handling events
  let handleChange = (e) => {
    setPokemon(e.target.value);
    console.log(pokemon);
  };

  let handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>demo</h2>
      <form onSubmit={handleSearch}>
        <input type='text' value={pokemon} onChange={handleChange} />
        <button>Search Pokedex</button>
      </form>
      <div>
        {pokemonData.map((pokemonChoice) => (
            <li>{pokemonChoice.name}</li>
        ))}
      </div>
    </div>
  );
}
