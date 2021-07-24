class PokemonsPage {
    constructor() {
        this.pokemons;
    }

    clearView() {
        document.getElementById("pokedex").innerHTML = ('');
    }

    setView() {
        const pokeapi = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        retrievePokemons(pokeapi)
        .then(({ results }) => Promise.all(results.map(({ url }) => {
            return retrievePokemons(url)})))
        .then((pokemons) => { 
            this.pokemons = pokemons.map(({ id, name, sprites }) => { 
                return { id, name, sprites: sprites.front_default };
            }); 
            this.print();
        });
    };

    print() {
        this.pokemons.forEach(({ id, name, sprites }) => {
            let pokemon = `<li class="pokemon>
                <a class="pokemon__anchor" "href="https://pokeapi.co/api/v2/pokemon/${name}">
                    <figure class="pokemon__figure">
                        <img class="pokemon__image" src="${sprites}" alt="${name}">
                        <figcaption class="pokemon__caption">
                            <h2 class="pokemon__id">#${id}</h2>
                            <h3 class="pokemon__name">${name}</h3>
                        </figcaption>
                    <figure>
                </a>
            </li>`; 
            document.getElementById("pokedex").innerHTML += pokemon;
        });
    };
}
