import PokemonInfo from './PokemonInfoComponents/PokemonInfo';
import styles from './PokemonDisplay.module.css';

export default function PokemonDisplay({ pokemonData, setPokemonData }) {
  return (
    <div className={styles.container}>
      {pokemonData.map((pokemonChoice) => (
        <PokemonInfo
          name={pokemonChoice.name}
          image={pokemonChoice.sprites.front_default}
          type={pokemonChoice.types[0].type.name}
          weight={pokemonChoice.weight}
          key={pokemonChoice.name}
        />
      ))}
    </div>
  );
}
