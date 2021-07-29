// eslint-disable-next-line import/extensions
import catchPkmn from './fetch-api.js';

const refreshPkInfo = async (pkmn) => {
  const pokemon = await catchPkmn(pkmn);
  const infoElement = document.querySelector('.pkdex__info');
  infoElement.querySelector('h2').textContent = `Nº: ${pokemon.id}`;
  infoElement.querySelector('img').src = pokemon.sprites.other['official-artwork'].front_default;
  infoElement.querySelector('img').alt = `${pokemon.name}-portrait`;
  infoElement.querySelector('p').textContent = pokemon.name;
};

export default refreshPkInfo;
