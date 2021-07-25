class PokemonFavourites {
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
      return {
        id,
        name,
        sprite: sprites[0] || sprites.front_default,
        types: typesN
      };
    });
  }

  setView() {
    this.pokemons = this.constructor.getPokemonsInfo(favouritePokemons);
    if (this.pokemons.length > 0) {
      this.print();
    } else {
      this.constructor.printEmpty();
    }
  }

  print() {
    this.pokemons.forEach(({
      id, name, sprite, types
    }) => {
      let typesElement = '';
      types.forEach((type) => {
        typesElement += `<span class="${type}">${type}</span>`;
      });

      const element = `<li>
        <button class="pokemon-list__favourite pokemon-list__favourite--active" onclick=addDeleteFavourites('${id}')><i class="fas fa-star fa-lg"></i></button>
        <a href="../pokemon-detail/pokemon-detail.html?name=${name}&from=favourites">
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

  static printEmpty() {
    const element = '<span>You don\'t have any favourite/created pokemons</span>';
    document.getElementById('pokemon-list').innerHTML += element;
  }
}
