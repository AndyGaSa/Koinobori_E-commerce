class PokemonDetails {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  clearView() {
    document.getElementById('pokemon__detail').innerHTML = ('');
  }

  setViewDetail() {
    getDetailPokemon(this.name)
      .then(({
        id, name, sprites, weight, order, height, abilities
      }) => {
        this.detailPokemon = {
          id,
          name,
          sprite: sprites.front_default,
          weight,
          order,
          height
        };
        return Promise.all(abilities.map(({ ability }) => getSinglePokemon(ability.url)));
      })
      .then((abilitiesList) => {
        const abilities = abilitiesList.map(({ name, effect_entries }) => ({
          name,
          description: effect_entries.find(({ language }) => language.name === 'en').effect
        }));
        this.detailPokemon.abilities = abilities;
        this.printPokemonDetail();
      });
  }

  printPokemonDetail() {
    const parentHtml = document.getElementById('pokemon__detail');
    const pokemonDetailTitle = document.createElement('h1');
    pokemonDetailTitle.innerHTML = `${this.detailPokemon.name} Details`;
    const pokemonImage = document.createElement('img');
    pokemonImage.src = `${this.detailPokemon.sprite}`;
    const pokemonDetailId = document.createElement('span');
    pokemonDetailId.innerHTML = `Id: ${this.detailPokemon.id}.`;
    const pokemonDetailWeight = document.createElement('span');
    pokemonDetailWeight.innerHTML = `Weight: ${this.detailPokemon.weight}.`;
    const pokemonDetailOrder = document.createElement('span');
    pokemonDetailOrder.innerHTML = `Order: ${this.detailPokemon.order}.`;
    const pokemonDetailHeight = document.createElement('span');
    pokemonDetailHeight.innerHTML = `Height: ${this.detailPokemon.height}.`;
    const abilitySubtitle = document.createElement('h2');
    abilitySubtitle.innerHTML = 'Abilities';
    parentHtml.appendChild(pokemonDetailTitle);
    parentHtml.appendChild(pokemonImage);
    parentHtml.appendChild(pokemonDetailId);
    parentHtml.appendChild(pokemonDetailWeight);
    parentHtml.appendChild(pokemonDetailOrder);
    parentHtml.appendChild(pokemonDetailHeight);
    parentHtml.appendChild(abilitySubtitle);
    this.detailPokemon.abilities.forEach(({ name, description }) => {
      const abilityName = document.createElement('span');
      const abilityDescription = document.createElement('span');
      abilityName.innerHTML = `Name: ${name}.`;
      console.log(name);
      abilityDescription.innerHTML = `Description: ${description}`;
      console.log(description);
      parentHtml.appendChild(abilityName);
      parentHtml.appendChild(abilityDescription);
    });
  }
}
