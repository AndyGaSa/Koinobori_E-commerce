const [limit, offset] = [5, 0];
const pokeapi = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`; 
let result;

retrievePokemons(pokeapi)
.then(({ results }) => Promise.all(results.map(({ url }) => {
    return retrievePokemons(url)})))
.then((pokemons) => pokemons.map(({ id, name, sprites }) => {
    return { id, name, sprites: sprites.front_default }}))
.then(result = hello);

console.log(result);