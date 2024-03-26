export default function PokemonDisplay({ pokemonData, setPokemonData }) {
  return (
    <div>
      {pokemonData.map((pokemonChoice) => (
        <div>
          <p>{pokemonChoice.name}</p>
          <img src={pokemonChoice.sprites.front_default} alt='' />
        </div>
      ))}
    </div>
  );
}