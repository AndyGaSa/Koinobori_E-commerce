class PokemonList {
  constructor() {
    this.pokemon = [];
  }

  setPokemon() {
    this.pokemon = JSON.parse(localStorage.getItem('pokemon')).slice(0, 50);
  }

  setView() {
    this.pokemon.forEach((pokemon) => {
      const element = `<button  class='${pokemon.type}' id="pokemons__container" onclick="setCurrentPokemon(event)"><a href='../details/details.html'>
            <img id="container__photo" src="${pokemon.img}">
            <p id="pokemon-name">${pokemon.name}</p></a>
        </button>`;
      const parentElement = document.getElementById('pokemons__display');
      parentElement.innerHTML += element;
    });
  }
}
