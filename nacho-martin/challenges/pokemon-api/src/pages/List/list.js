const pokemonPage = new PokemonList(pokemonArray.slice((pagination * page)
 - pagination, pagination * page));
pokemonPage.setView();
