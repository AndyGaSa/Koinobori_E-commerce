(function printPokemonListPage() {
  const pokemonListPage = new PokemonList();
  pokemonListPage.clearView();
  const pokemonNumber = 5;
  const currentPage = 0;
  pokemonListPage.setViewList(pokemonNumber, currentPage);
}());

function filterPokemons() {
  const input = document.getElementById('search__bar').value.trim();
}

/* if (input) {
    const result = filterPokemonsApi(input)
      .then((pokemons) => Promise.all(pokemons.map(({ url }) => getSinglePokemon(url)))
        .then((pokemonsInfo) => {
          this.pokemons = pokemons.map(({ id, name, sprites }) => {
            const onePokemon = {
              id,
              name,
              sprite: sprites.front_default
            };
            return onePokemon;
          });
          this.printEachPokemon();
        });
    } */
