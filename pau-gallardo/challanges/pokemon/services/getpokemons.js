let pokemonsList = [];
function getPokemons(howManyPokemons, howManyPokemons) {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${howManyPokemons}&offset=${howManyPokemons}`)
      .then((response) => response.json())
      .then((pokemons) => pokemons)
        .then(({results}) => 
        Promise.all(results.map(({url}) => 
        fetch(`${url}`)
            .then((response2) => response2.json())
            .then((allPokemonStuff) => allPokemonStuff))))
        .then((pokemons2) => {
            pokemonsList = pokemons2.map(({
                id, name, sprites, types
            }) => {
                const pokemonObj = {
                    id,
                    name,
                    sprites: sprites.front_default,
                    types: types[0].type.name,
                }
                return pokemonObj;
            })
        })
    }

    pokemons = getPokemons(100,100);

