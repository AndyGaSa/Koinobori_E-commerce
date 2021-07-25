function clearPokemons(){
    const parentElement = document.querySelector('.main__nav__pokemons-container');
    parentElement.innerHTML = '';
}

function printPokemons(howManyPokemons){
    clearPokemons();
    const pokedex = new pokedexPage();
    pokedex.pokemonsShown = howManyPokemons;
    localStorage.setItem('pokemonsShown',JSON.stringify(pokedex.pokemonsShown));
    pokedex.setView();
}

function changePage(id){
    clearPokemons();
    let pageNumber = JSON.parse(localStorage.getItem('pokemonsPage'));
    const pokedex = new pokedexPage();
    pokedex.pokemonsShown = JSON.parse(localStorage.getItem('pokemonsShown'));

    switch(id){
        case "prev":
            pokedex.pokemonsPage = pageNumber - 1;
            localStorage.setItem('pokemonsPage',pokedex.pokemonsPage)
            pokedex.setView();
            break

        case "next":
            pokedex.pokemonsPage = pageNumber + 1;
            localStorage.setItem('pokemonsPage',pokedex.pokemonsPage)
            pokedex.setView();
            break
    }
}