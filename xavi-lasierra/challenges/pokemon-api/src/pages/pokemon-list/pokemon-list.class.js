class PokemonList {
  constructor() {
    this.pokemons = [];
  }

  clearView() {
    document.getElementById('pokemon-list').innerHTML = '';
  }

  setView(numberOfPokemons, currentPage) {
    const pokemonNames = getPokemons(numberOfPokemons, numberOfPokemons * currentPage)
      .then(({ results }) => Promise.all(results.map(({ url }) => getSinglePokemon(url))))
      .then((pokemons) => {
        this.pokemons = pokemons.map(({
          id, name, sprites, types
        }) => {
          const typesN = types.map(({ type }) => type.name);
          const pokemon = {
            id,
            name,
            sprite: sprites.front_default,
            types: typesN
          };
          return pokemon;
        });
        this.print();
      });
  }

  print() {
    this.pokemons.forEach(({
      id, name, sprite, types
    }) => {
      let typesElement = '';
      types.forEach((type) => {
        typesElement += `<div class="type-${type}">${type}</div>`;
      });
      const element = `<li><a>
            <div>
                <span>${id}</span>
                <span>${name}</span>
            </div>
            <div>
            ${typesElement}
            </div>
            <img src="${sprite}" alt="${name} photo">
        </a></li>`;
      document.getElementById('pokemon-list').innerHTML += element;
    });
  }
}
