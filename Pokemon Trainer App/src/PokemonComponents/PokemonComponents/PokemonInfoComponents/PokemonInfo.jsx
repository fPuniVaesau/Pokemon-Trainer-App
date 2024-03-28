import styles from './PokemonInfo.module.css'

export default function PokemonInfo({ name, image, type, weight }) {
  return (
    <div className={styles.container}>
      <p className={styles.name}>{name}</p>
      <img className={styles.pokemonImg} src={image} alt='pokemon image' />
      <p>Type: {type}</p>
      <p>Weight: {weight}</p>
    </div>
  );
}
