import { useState, useEffect } from 'react';
export default function Card({pokemon, setPokemon}) {
   const baseURL = "https://pokeapi.co/api/v2/pokemon/"
  
  useEffect(() => {
    async function fetchPokemonData(){
        try{
            
        }
        catch(error){
            console.log(error)
        }
    }
  }, []);

  //Functions for handling events
  let handleChange = (e) => {
    setPokemon(e.target.value)
  }

  let handleSearch = (e) => {
    e.preventDefault();
    console.log(pokemon)
    setPokemon('')
  }

  return (
    <div>
      <h2>demo</h2>
      <img
        src='https://i.pinimg.com/originals/d3/6e/6f/d36e6f74d9ade37082eb7234cb6dcc22.png'
        alt='pokemon'
      />
      <div>
        <input type='text' value={pokemon} onChange={handleChange} />
        <button onClick={(()=>{handleSearch})}>Search Pokedex</button>
      </div>
    </div>
  );
}
