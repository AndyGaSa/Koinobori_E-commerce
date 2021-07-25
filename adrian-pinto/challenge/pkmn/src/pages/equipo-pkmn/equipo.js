import catchPkmn from '../../modules/fetch-api.js';
import giveSixRandomId from '../../modules/take-random-id.js';
import pkcard from '../../modules/pkcard.js';

const randomId = giveSixRandomId(150);
const pkcontainer = document.getElementsByClassName('pkteam')[0];
// console.log(randomId);
randomId.forEach(async (id) => {
  const pktest = await catchPkmn(id);
  pkcontainer.innerHTML += pkcard(pktest);
});
