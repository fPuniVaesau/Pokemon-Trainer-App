import styles from "./Form.module.css";

export default function Form({ setPokemon, pokemon }) {
  //Functions for handling events
  let handleChange = (e) => {
    let target = e.target.value;
    setPokemon(target);
  };

  let handleSearch = (e) => {
    e.preventDefault();
    setPokemon('');
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          value={pokemon}
          onChange={handleChange}
          placeholder='Find Pokemon'
        />
        {/* <button>Search Pokedex</button> */}
      </form>
    </div>
  );
}
