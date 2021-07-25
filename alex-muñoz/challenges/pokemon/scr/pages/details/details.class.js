class DetailsPage {
  constructor(id) {
    this.id = id;
  }

  getPokemonDetails() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.sprites.other.dream_world.front_default);
        const test = document.querySelector('.pokemon-title');
        test.innerHTML = data.name;
        const pokemonTypes = document.querySelector('.pokemon-type');
        for (let index = 0; index < data.types.length; index += 1) {
          const type = document.createElement('li');
          type.innerHTML = data.types[index].type.name;
          pokemonTypes.appendChild(type);
        }
        const pokeImage = document.querySelector('.pokemon-img');
        pokeImage.setAttribute('src', `${data.sprites.other.dream_world.front_default}`);
        for (let index = 0; index < data.abilities.length; index += 1) {
          const ability = document.createElement('li');
          ability.innerHTML = data.abilities[index].ability.name;
          const pokemonAbilities = document.querySelector('.pokemon-abilities');
          pokemonAbilities.appendChild(ability);
        }
      });
  }
}
