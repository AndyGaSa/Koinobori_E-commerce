class PokemonList {
  constructor(pokemonArray) {
    this.pokemon = pokemonArray;
  }

  setView() {
    const parentElement = document.querySelector('.pokemon-main');
    this.pokemon.forEach((pokemon) => {
      const pokemonElementLi = document.createElement('li');
      const pokemonSlug = document.createElement('div');
      pokemonSlug.classList.add('pokeSlug');
      const pokemonName = document.createElement('h3');
      const pokemonAnchor = document.createElement('a');
      const pokemonImage = document.createElement('img');
      const pokemonNumber = document.createElement('span');
      pokemonAnchor.href = `../Details/details.html?id=${pokemon.order}`;
      pokemonAnchor.appendChild(pokemonImage);
      pokemonSlug.append(pokemonNumber);
      pokemonSlug.append(pokemonName);
      pokemonName.innerHTML = pokemon.name;
      pokemonImage.setAttribute('src', `${pokemon.img}`);
      pokemonNumber.innerHTML = `#${pokemon.order}`;
      pokemonElementLi.appendChild(pokemonSlug);
      pokemonElementLi.appendChild(pokemonAnchor);
      parentElement.appendChild(pokemonElementLi);
    });
  }
}
