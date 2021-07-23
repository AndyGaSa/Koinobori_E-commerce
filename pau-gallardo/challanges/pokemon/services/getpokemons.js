let pokemonsList;
function getPokemons(howManyPokemons, howManyPokemons) {
    
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${howManyPokemons}&offset=${howManyPokemons}`)
      .then((response) => response.json())
      .then((pokemons) => pokemons)
        .then(({results}) => 
        Promise.all(results.map(({url}) => fetch(`${url}`)
            .then((response2) => response2.json())
            .then((allPokemonStuff) => allPokemonStuff.map(({
                id,name,sprites}) => {
                    //let pokemon = {
                    //    id,
                    //    name,
                    //    sprite: sprites.front_default,
                    //    //types: types.type.name,
                    //};
                    //return pokemon;
                 }))))
        )
            
        

        //console.log(response.json())
        // .then(pokemons.map(({id, name, sprites, types}) => {
        //     let singlePokemon = {
        //         id,
        //         name,
        //         sprite: sprites.front_default,
        //         type: types.type.name,
        //     }
        //     return singlePokemon;
        //}));
      //})
    }

    pokemons = getPokemons(100,100);

