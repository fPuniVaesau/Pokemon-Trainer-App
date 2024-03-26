import { useState, useEffect } from 'react';
import Form from '../FormComponents/Form';
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
        console.log(data);
        if (pokemon !== '') {
          setPokemonData([...pokemonData, data]);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [pokemon]);

  return (
    <div>
      <h2>Pokemon</h2>
      <Form setPokemon={setPokemon} pokemon={pokemon} />
      
    </div>
  );
}
