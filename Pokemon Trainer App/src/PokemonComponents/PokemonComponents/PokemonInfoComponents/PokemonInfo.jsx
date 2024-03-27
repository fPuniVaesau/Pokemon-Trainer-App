import styles from './PokemonInfo.module.css'

export default function PokemonInfo({ name, image }) {
  return (
    <div>
      <p className={styles.name}>{name}</p>
      <img className={styles.pokemonImg} src={image} alt='pokemon image' />
    </div>
  );
}
