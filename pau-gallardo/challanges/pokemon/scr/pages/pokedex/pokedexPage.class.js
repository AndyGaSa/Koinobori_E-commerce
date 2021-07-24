class pokedexPage{
    constructor(){
        this.pokemonsList;
        this.pokemonsShown = 1;
        this.pokemonsPage = 0;
    }

    setView(){
        getPokemons(this.pokemonsShown, this.pokemonsShown*this.pokemonsPage)
        .then((pokeArray) => {
            localStorage.setItem('pokemons',JSON.stringify(pokeArray));
        })
        this.pokemonsList = JSON.parse(localStorage.getItem('pokemons'));
        
        this.pokemonsList.forEach((pokemon) => {
            const element = `<li>
            <a href="../Details/details.html?heroId=${pokemon.id}">
            <span class="badge">${pokemon.id}</span> ${pokemon.name}
            </a>
            <button class="delete" title="delete hero">x</button>
            </li>`;
            let pokemonContainer = document.getElementById('main__nav__pokemons-container');
            pokemonContainer.innerHTML += element;
        });
    }

    setPokemonsShown(numberPokemons){
        this.pokemonsShown = numberPokemons;
    }
}
