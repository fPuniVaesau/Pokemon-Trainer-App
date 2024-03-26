export default function Form({setPokemon}) {
  //Functions for handling events
  let handleChange = (e) => {
    setPokemon(e.target.value);
    console.log(pokemon);
  };

  let handleSearch = (e) => {
    e.preventDefault();
    setPokemon('');
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type='text' value={pokemon} onChange={handleChange} />
        <button>Search Pokedex</button>
      </form>
    </div>
  );
}
