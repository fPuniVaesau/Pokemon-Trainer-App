import PokemonInfo from "./PokemonInfoComponents/PokemonInfo";
import styles from "./PokemonDisplay.module.css"

export default function PokemonDisplay({ pokemonData, setPokemonData }) {
  return (
    <div>
      {pokemonData.map((pokemonChoice) => (
        <PokemonInfo name={pokemonChoice.name} image={pokemonChoice.sprites.front_default}/>
      ))}
    </div>
  );
}
