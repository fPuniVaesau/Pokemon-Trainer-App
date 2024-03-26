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
        let response = await fetch(`${baseURL}${pokemon.name}`);
        if (!response.ok) {
          throw new Error('Pokemon Data Not Found!');
        }
        let data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  }, [pokemon.name, pokemon.image]);

  //Functions for handling events
  let handleChange = (e) => {
    setPokemon({ ...pokemon, name: e.target.value });
    console.log(pokemon.name);
  };

  let handleSearch = (e) => {
    e.preventDefault();
    console.log(pokemon.name);
  };

  return (
    <div>
      <h2>demo</h2>
      <form onSubmit={handleSearch}>
        <input type='text' value={pokemon.name} onChange={handleChange} />
        <button>Search Pokedex</button>
      </form>
    </div>
  );
}
