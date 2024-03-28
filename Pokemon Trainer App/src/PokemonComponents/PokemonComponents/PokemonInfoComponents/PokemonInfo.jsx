import styles from './PokemonInfo.module.css';

export default function PokemonInfo({ name, image, type, weight, pokemonId }) {
  return (
    <div className={styles.container}>
      <p className={styles.name}>{name}</p>
      <img className={styles.pokemonImg} src={image} alt='pokemon image' />
      <div className={styles.statsContainer}>
        <p>Id: {pokemonId}</p>
        <p>Type: {type}</p>
        <p>Weight: {weight}lbs</p>
      </div>
    </div>
  );
}
