/* eslint-disable react/prop-types */
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {
        pokemons.map((pokemon) => (
          <PokemonCard
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            key={pokemon.name}
            types={pokemon.types}
            id={pokemon.id}
            favorite={pokemon.favorite}
          />
        ))
      }
    </div>
  );
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
};

export default PokemonList;