let currentPokemon = JSON.parse(localStorage.getItem('pokemonProfile'));

function searchPokemon() {
  const searchInputDOM = document.getElementById('pokemon-search-input');
  const searchInput = searchInputDOM.value;
  getPokemonFromApi(searchInput).then((pokemonProfileData) => {
    localStorage.setItem('pokemonProfile', JSON.stringify(pokemonProfileData));
    currentPokemon = JSON.parse(localStorage.getItem('pokemonProfile'));
    printPokemonData(currentPokemon);
  });
} function nextPokemon() {
  if (!localStorage.getItem('pokemonProfile')) { return; }
  const searchInput = currentPokemon.id += 1;
  getPokemonFromApi(searchInput).then((pokemonProfileData) => {
    localStorage.setItem('pokemonProfile', JSON.stringify(pokemonProfileData));
    currentPokemon = JSON.parse(localStorage.getItem('pokemonProfile'));
    printPokemonData(currentPokemon);
  });
} function previousPokemon() {
  if (!localStorage.getItem('pokemonProfile')) { return; }
  const searchInput = currentPokemon.id -= 1;
  getPokemonFromApi(searchInput).then((pokemonProfileData) => {
    localStorage.setItem('pokemonProfile', JSON.stringify(pokemonProfileData));
    currentPokemon = JSON.parse(localStorage.getItem('pokemonProfile'));
    printPokemonData(currentPokemon);
  });
} function printPokemonData(pokemonID) {
  const screenDOM = document.getElementById('screen-content');
  screenDOM.innerHTML = `
    <section class="screen__top">
        <section class="screen__pokemon-pic-container">
            <h1>${pokemonID.forms[0].name}</h1>
            <span>${pokemonID.id}</span>
            <img src=${pokemonID.sprites.front_default} alt="" class="screen__pokemon-picture">
        </section>
        <section class="main__screen-stats" id="screen">      
            <h2 id="pokemonType">type</h2>
            <h2 id="pokemonMoves">moves</h2>
            <h2>stats</h2>
            <p>${pokemonID.stats[0].stat.name}: ${pokemonID.stats[0].base_stat}</p>
            <p>${pokemonID.stats[1].stat.name}: ${pokemonID.stats[1].base_stat}</p>
            <p>${pokemonID.stats[2].stat.name}: ${pokemonID.stats[2].base_stat}</p>
            <p>${pokemonID.stats[5].stat.name}: ${pokemonID.stats[5].base_stat}</p>
        </section>
    </section>
    <article class="screen__pokemon-description">
        <h2>description</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, excepturi molestias eligendi labore cumque iure! Doloremque porro possimus aspernatur unde. Reiciendis</p>
    </article>`;

  const typeParent = document.getElementById('pokemonType');
  pokemonID.types.splice(0, 3).forEach((element) => {
    const child = document.createElement('p');
    typeParent.after(child);
    child.innerHTML = element.type.name;
  });
  const movesParent = document.getElementById('pokemonMoves');
  pokemonID.moves.splice(0, 4).forEach((element) => {
    const child = document.createElement('p');
    movesParent.after(child);
    child.innerHTML = element.move.name;
  });
}
