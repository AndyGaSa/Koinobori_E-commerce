// eslint-disable-next-line import/extensions
import catchPkmn from './fetch-api.js';

const refreshPkData = async (pkmn) => {
  const pokemon = await catchPkmn(pkmn);

  console.log(`Update ${pokemon.name} data`);
};

export default refreshPkData;
