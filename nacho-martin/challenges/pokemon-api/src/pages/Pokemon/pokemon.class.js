class PokemonList {
  constructor() {

  }

  setPokeView() {
    this.pokemons.forEach((pokemon) => {
      const element = `<div class="svg-wrapper">
      <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
        <rect id="shape" height="40" width="150" />
        <div id="text">
          <a href="../Details/details.html?pokemonId=${pokemon.id}"><span class="spot">${pokemon.id}</span>${pokemon.name}</a>
          <button id=${pokemon.id} class='delete' onclick="PokemonPage.deletePoke(this.id)" title="delete pokemon">x</button>
        </div>
      </svg>
    </div>`;

      const parentElement = document.getElementById('workarea__container');
      parentElement.innerHTML += element;
    });
  }
}
