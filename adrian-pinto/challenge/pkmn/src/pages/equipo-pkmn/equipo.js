import catchPkmn from '../../modules/fetch-api.js';
import giveRandomId from '../../modules/take-random-id.js';

  const pktest = await catchPkmn(151);
  console.log(`El Pkmn atrapado es: ${pktest.name}`);

  console.log(giveRandomId(150));
