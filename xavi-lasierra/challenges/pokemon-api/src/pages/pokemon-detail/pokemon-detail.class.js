class PokemonDetailPage {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  setView() {
    let searchInfo;
    if (this.id) {
      searchInfo = this.id;
    } else if (this.name) {
      searchInfo = this.name;
    }
    getSinglePokemon(`https://pokeapi.co/api/v2/pokemon/${searchInfo}`)
      .then(({
        id, name, types, height, weight, sprites, stats, abilities, moves
      }) => {
        const typesN = types.map(({ type }) => type.name);
        const statsN = stats.map((stat) => ({ name: stat.stat.name, value: stat.base_stat }));
        this.pokemon = {
          id,
          name,
          types: typesN,
          weight,
          height,
          stats: statsN,
          sprite: [sprites.front_default, sprites.front_shiny]
        };
        const abilitiesPromises = abilities.map(({ ability }) => getSinglePokemon(ability.url));
        const movesPromises = moves.map(({ move }) => getSinglePokemon(move.url));
        return Promise.all([...abilitiesPromises, ...movesPromises]);
      })
      .then((abilitiesMovesList) => {
        let abilities = abilitiesMovesList.filter((element) => !element?.type);
        let moves = abilitiesMovesList.filter((element) => element?.type);
        abilities = abilities.map(({ name, effect_entries }) => ({
          name,
          description: effect_entries.find(({ language }) => language.name === 'en').effect
        }));
        moves = moves.map(({
          name, type, power, pp, accuracy, effect_entries
        }) => ({
          name,
          type: type.name,
          pp,
          power,
          accuracy,
          description: effect_entries.find(({ language }) => language.name === 'en').effect
        }));

        this.pokemon.abilities = abilities;
        this.pokemon.moves = moves;
        console.log(this.pokemon);
        this.print();
        this.setButtons();
      });
  }

  setButtons() {
    const previous = document.getElementById('navigation__previous');
    const next = document.getElementById('navigation__next');

    if (this.pokemon.id - 1 > 0) {
      previous.href = `./pokemon-detail.html?id=${this.pokemon.id - 1}`;
    } else {
      previous.classList = 'navigation__previous hide';
    }

    if (this.pokemon.id + 1 <= NUMOFPOKE + 1) {
      next.href = `./pokemon-detail.html?id=${this.pokemon.id + 1}`;
    } else {
      next.classList = 'navigation__next hide';
    }
  }

  print() {
    this.printTitle();
    this.printPhoto();
  }

  printTitle() {
    document.getElementById('pokemon__id').innerText = `#${this.pokemon.id}`;
    document.getElementById('pokemon__name').innerText = capitalizeFirstLetter(this.pokemon.name);
  }

  printPhoto() {
    document.getElementById('pokemon__photo').src = this.pokemon.sprite[0];
    document.getElementById('pokemon__photo').alt = `${this.pokemon.sprite[0]} photo`;
  }

  printPhotoShiny() {
    document.getElementById('pokemon__photo').src = this.pokemon.sprite[1];
  }
}
