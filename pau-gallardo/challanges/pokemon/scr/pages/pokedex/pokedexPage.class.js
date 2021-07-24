class pokedexPage{
    constructor(){
        this.pokemonsList;
        this.pokemonsShown = 5;
        this.pokemonsPage = 0;
    }

    setView(){
        getPokemons(this.pokemonsShown, this.pokemonsShown*this.pokemonsPage)
        .then((pokeArray) => {
            localStorage.setItem('pokemons',JSON.stringify(pokeArray));
            localStorage.setItem('pokemonsShown',JSON.stringify(this.pokemonsShown));
            localStorage.setItem('pokemonsPage',JSON.stringify(this.pokemonsPage));
        })
        this.pokemonsList = JSON.parse(localStorage.getItem('pokemons'));
        
        this.pokemonsList.forEach((pokemon) => {
            const element = 
            `<div class="pokecontainer__card">
                <img src="${pokemon.sprites}" class="pokecontainer__card__img"alt="pokemon ${pokemon.name}"></img>
                <div class="pokecontainer__card__stats">
                    <div class="pokecontainer__card__stats__text">
                        <span class="pokecontainer__card__stats__text__name">${pokemon.name}</span>
                        <span class="pokecontainer__card__stats__text__id">${pokemon.id}</span>
                    </div>
                    <div class="pokecontainer__card__stats__type-container">
                        <span class="pokecontainer__card__stats__type-container__type">${pokemon.types}</span>
                    </div>
                </div>
            </div>`;
            let pokemonContainer = document.querySelector('.main__nav__pokemons-container');
            pokemonContainer.innerHTML += element;
        });
    }
}
