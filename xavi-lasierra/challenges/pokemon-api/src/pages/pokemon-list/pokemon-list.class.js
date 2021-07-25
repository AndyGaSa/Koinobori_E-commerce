class PokemonList {
  constructor() {
    this.pokemons = [];
  }

  clearView() {
    this.pokemon = [];
    document.getElementById('pokemon-list').innerHTML = '';
  }

  static getPokemonsInfo(pokemons) {
    return pokemons.map(({
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
  }

  setView(numberOfPokemons, currentPage) {
    getPokemons(numberOfPokemons, numberOfPokemons * currentPage)
      .then(({ results }) => Promise.all(results.map(({ url }) => getSinglePokemon(url))))
      .then((pokemons) => {
        this.pokemons = this.constructor.getPokemonsInfo(pokemons);
        this.print();
      });
  }

  print() {
    this.pokemons.forEach(({
      id, name, sprite, types
    }) => {
      let typesElement = '';
      types.forEach((type) => {
        typesElement += `<span class="${type}">${type}</span>`;
      });
      let favouriteClass = 'pokemon-list__favourite';
      if (findInFavourites(id)) {
        favouriteClass += ' pokemon-list__favourite--active';
      }
      const element = `<li>
        <button class="${favouriteClass}" onclick=addDeleteFavourites('${id}')><i class="fas fa-star fa-lg"></i></button>
        <a href="../pokemon-detail/pokemon-detail.html?name=${name}">
            <section class="pokemon-list__top">
                <div class="pokemon-list__title">
                  <span class="pokemon-list__id">#${id}</span>
                  <span>${capitalizeFirstLetter(name)}</span>
                </div>
                <div>
                </div>
            </section>
            <section class="pokemon-list__types-photo">
              <div class="pokemon-list__types">
                ${typesElement}
              </div>
              <img src="${sprite}" alt="${name} photo">
            </section>
        </a></li>`;
      document.getElementById('pokemon-list').innerHTML += element;
    });
  }

  setPokemons(pokemons) {
    this.pokemons = this.constructor.getPokemonsInfo(pokemons);
    this.clearView();
    this.print();
  }
}
