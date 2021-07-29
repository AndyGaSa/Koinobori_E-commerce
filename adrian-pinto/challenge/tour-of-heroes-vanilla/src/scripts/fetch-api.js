/**
 * https://developer.mozilla.org/es/docs/Web/API/Fetch_API
 * https://akabab.github.io/superhero-api/
 * @param { Number || String } heroId Id number || 'all' => to obtain all heroes json
 * @param { String } heroInfo id, powerstat, apparence, biography, connections, work
 * @returns { Object } promise
 */
const callHeroe = async (heroId, heroInfo) => {
  const consult = heroId === 'all' ? `${heroId}.json` : `${heroInfo}/${heroId}.json`;
  const response = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/${consult}`);
  return response.json()
    .then((hero) => { response.json = hero; return response; })
    .catch((error) => new Error(error));
};

export default callHeroe;
/* use case
newCall = await callHeroe( id, 'info' )
*/
