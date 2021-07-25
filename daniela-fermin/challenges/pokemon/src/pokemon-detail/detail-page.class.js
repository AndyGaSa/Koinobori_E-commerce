class PokemonDetails {
    constructor() {
      this.pokemon = {};
    }
  
    clearView() {
      document.getElementById('pokemon__list').innerHTML = ('');
    }
  
    setViewList(numberOfPokemons, currentPage) {
      getPokemons(numberOfPokemons, numberOfPokemons * currentPage)
        .then(({ results }) => Promise.all(results.map(({ url }) => getSinglePokemon(url))))
        .then((pokemons) => {
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
    }