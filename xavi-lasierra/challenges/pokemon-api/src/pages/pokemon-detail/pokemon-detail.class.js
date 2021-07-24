class PokemonDetailPage {
  constructor(name) {
    this.name = name;
  }

  setView() {
    getSinglePokemon(`https://pokeapi.co/api/v2/pokemon/${this.name}`)
      .then(({
        id, name, types, height, sprites, stats, abilities
      }) => {
        const typesN = types.map(({ type }) => type.name);
        this.pokemon = {
          id,
          name,
          types: typesN,
          height,
          sprite: [sprites.front_default, sprites.front_shiny]
        };
        return Promise.all(abilities.map(({ ability }) => getSinglePokemon(ability.url)));
      })
      .then((abilitiesList) => {
        const abilities = abilitiesList.map(({ name, effect_entries }) => ({
          name,
          description: effect_entries.find(({ language }) => language.name === 'en').effect
        }));
        this.pokemon.abilities = abilities;
        console.log(this.pokemon);
      });
  }
}
