
export default PokemonDisplay(){
    return(
        <div>
        {pokemonData.map((pokemonChoice) => (
          <>
            <p>{pokemonChoice.name}</p>
            <img src={pokemonChoice.sprites.front_default} alt='' />
          </>
        ))}
      </div>
    )
}