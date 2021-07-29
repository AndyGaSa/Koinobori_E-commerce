/**
 * https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest
 * https://akabab.github.io/superhero-api/
 * @param { Number || String } heroId Id number || 'all' => to obtain all heroes json
 * @param { String } heroInfo id, powerstat, apparence, biography, connections, work
 * @returns { Object } promise
 */
function newXHR(heroId, heroInfo) {
  const consult = heroId === 'all' ? `${heroId}.json` : `${heroInfo}/${heroId}.json`;
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/${consult}`, true);
    xhr.onloadend = function () { resolve(this.response); };
    xhr.onerror = function () { reject(console.error('La solicitud no a podido ser resuelta')); };
    xhr.send();
  });
}

export default newXHR;
/**
 Use case 1
 const result = await newXHR(1,'id'); => string JSON

 Use case 3
 let test = JSON.parse( await newXHR(1,'id') )

 Use case 2
 Promise.all([newXHR("URI")]).then(function(value){ Do stuff});
 */
