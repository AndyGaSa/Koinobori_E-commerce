/**
 * https://developer.mozilla.org/es/docs/Web/API/Fetch_API
 * https://pokeapi.co/
 * @param { String } srcToFind Name || ID || ?limit=Number&offset=Number
 * @param { String } typeFind pokemon || move
 * @returns { Object } promise
 */
const catchPkmn = async (srcToFind, typeFind = 'pokemon') => {
  const response = await fetch(`https://pokeapi.co/api/v2/${typeFind}/${srcToFind}`);
  return response.json().catch((error) => new Error(error));
};

export default catchPkmn;
/* use case
newCall = await catchPkmn( id, 'info' )
*/
// initial limit 151 and 0 offset