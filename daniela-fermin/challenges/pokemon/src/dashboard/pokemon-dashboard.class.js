class PokemonDashboard {
  constructor() {
    this.pokemons = [];
  }

  clearView() {
    document.getElementById('pokemon__list').innerHTML = ('');
  }

  setViewDashboard(numberOfPokemons, currentPage) {
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

  printEachPokemon() {
    this.pokemons.forEach(({
      id, name, sprite
    }) => {
      const pokemonElement = `<li class="pokemon__card"><a href="../pokemon-detail/pokemon-detail.html?name=${name}">
              <div>
                  <span>${name}</span>
              </div>
              <img src="${sprite}" alt="${name} photo">
          </a></li>`;
      document.getElementById('pokemon__dashboard').innerHTML += pokemonElement;
    });
  }
}
