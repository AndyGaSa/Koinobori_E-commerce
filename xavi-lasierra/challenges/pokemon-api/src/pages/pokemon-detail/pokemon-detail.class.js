/* eslint-disable camelcase */
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
          name, type, power, pp, accuracy, flavor_text_entries
        }) => ({
          name,
          type: type.name,
          pp,
          power,
          accuracy,
          description: flavor_text_entries.find(({ language }) => language.name === 'en').flavor_text
        }));

        this.pokemon.abilities = abilities;
        this.pokemon.moves = moves;
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
    this.printMainInformation();
    this.printStats();
    this.printMoves();
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

  printMainInformation() {
    const pokemonTypes = document.getElementById('pokemon__types');
    pokemonTypes.innerHTML = 'Types: ';
    this.pokemon.types.forEach((type) => {
      const element = `<span class="${type}">${capitalizeFirstLetter(type)}</span>`;
      pokemonTypes.innerHTML += element;
    });

    document.getElementById('pokemon__height').innerText = `${this.pokemon.height}'`;
    document.getElementById('pokemon__weight').innerText = `${this.pokemon.weight} lbs`;

    const pokemonAbilities = document.getElementById('pokemon__abilities');
    pokemonAbilities.innerHTML = '';
    this.pokemon.abilities.forEach((ability) => {
      const element = `<li onclick="showAbility('${ability.name}')">${capitalizeFirstLetter(ability.name)}</li>`;
      pokemonAbilities.innerHTML += element;
    });
  }

  printStats() {
    const pokemonStats = document.getElementById('pokemon__stats');
    pokemonStats.innerHTML = '';
    this.pokemon.stats.forEach(({ name, value }) => {
      const element = `<li><span class="pokemon__stats__name">${capitalizeFirstLetter(name)}</span>
        <progress value="${value}" max="255"></progress><span class="pokemon__stats__value">${value}</span></li>`;
      pokemonStats.innerHTML += element;
    });
  }

  printMoves() {
    const pokemonMoves = document.getElementById('pokemon__moves');
    pokemonMoves.innerHTML = `<tr>
        <th>Name</th><th>Type</th><th>Power</th><th>Accuracy</th><th>PP</th><th>Description</th>
    </tr>`;
    this.pokemon.moves.forEach(({
      name, type, power, accuracy, pp, description
    }) => {
      const element = `<tr>
        <th>${capitalizeFirstLetter(name)}</th><td>${type}</td><td>${power || '-'}</td><td>${accuracy || '-'}</td><td>${pp}</td><td>${description}</td>
        <tr>`;
      pokemonMoves.innerHTML += element;
    });
  }

  printAbilityDescription(name) {
    document.getElementById('pokemon__resume__default').classList = 'delete';
    const ability = this.pokemon.abilities.find((abilityF) => abilityF.name === name);
    document.getElementById('pokemon__resume__ability__title').innerText = capitalizeFirstLetter(ability.name);
    document.getElementById('pokemon__resume__ability__description').innerText = ability.description;
    document.getElementById('pokemon__resume__ability').classList = 'pokemon__resume__ability';
  }

  static closeAbilityDescription() {
    document.getElementById('pokemon__resume__default').classList = 'pokemon__resume__default';
    document.getElementById('pokemon__resume__ability').classList = 'delete';
  }
}
