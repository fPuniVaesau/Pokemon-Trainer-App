export default function PokemonInfo({ name, image }) {
  return (
    <div>
      <p>{name}</p>
      <img src={image} alt='pokemon image' />
    </div>
  );
}
