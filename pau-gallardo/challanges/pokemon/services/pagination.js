let howManyPokemonsSaved = 5;
function clearPokemons(){
    const parentElement = document.querySelector('.main__nav__pokemons-container');
    parentElement.innerHTML = '';
}

function printPokemons(howManyPokemons = howManyPokemonsSaved){
    clearPokemons();
    const pokedex = new pokedexPage();
    pokedex.pokemonsShown = howManyPokemons;
    howManyPokemonsSaved = pokedex.pokemonsShown;
    pokedex.setView();
}

function changePage(){
    clearPokemons();
    const pokedex = new pokedexPage();
    pokedex.pokemonsShown = howManyPokemons;
    pokedex.setView();
}