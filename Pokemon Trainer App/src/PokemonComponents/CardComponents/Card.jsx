import { useState, useEffect } from 'react';
import Form from '../FormComponents/Form';
import PokemonDisplay from '../PokemonComponents/PokemonDisplay';
import styles from './Card.module.css';


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
        let response = await fetch(`${baseURL}${pokemon.toLowerCase()}`);
        if (!response.ok) {
          throw new Error('Pokemon Data Not Found!');
        }
        let data = await response.json();
        console.log(data);
        if (pokemon !== '') {
          setPokemonData([...pokemonData, data]);
          setPokemon('')
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [pokemon]);

  return (
    <div className={styles.test}>
      <h2>Pokemon</h2>
      <Form setPokemon={setPokemon} pokemon={pokemon} />
      <PokemonDisplay pokemonData={pokemonData} />
    </div>
  );
}
