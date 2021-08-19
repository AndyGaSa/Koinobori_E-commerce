// eslint-disable-next-line import/extensions
import catchPkmn from './fetch-api.js';

const onclickBadage = (trigger, element) => {
  const pkinfoContainer = element;
  const pokemon = trigger.target;
  pkinfoContainer.querySelector('header h2').textContent = pokemon.dataset.name;
  pkinfoContainer.querySelector('img').src = pokemon.dataset.splashart;
  pkinfoContainer.querySelector('footer .pkno').textContent = `Nº: ${pokemon.dataset.id}`;
  pkinfoContainer.querySelectorAll('.type').forEach((node, index) => {
    const type = node;
    type.classList.remove(type.classList[2]);
    type.classList.add(`type--${pokemon.dataset[`type${index}`]}`);
    type.textContent = pokemon.dataset[`type${index}`];
  });
  pkinfoContainer.querySelector('.pkmon-info__details-btn').href = `../pkdex/pkdex.html?name=${pokemon.dataset.name}`;
};

const pkbadge = async (pkmn, element) => {
  const pkmndata = await catchPkmn(pkmn.name);
  element.setAttribute('src', pkmndata.sprites.front_default);
  element.setAttribute('alt', `${pkmndata.name}-icon`);
  element.setAttribute('data-name', pkmndata.name);
  element.setAttribute('data-id', pkmndata.id);
  element.setAttribute('data-type0', pkmndata.types[0].type.name);
  element.setAttribute('data-type1', pkmndata.types[1] ? pkmndata.types[1].type.name : '-none-');
  element.setAttribute('data-splashArt', pkmndata.sprites.other['official-artwork'].front_default);
  element.addEventListener('click', (trigger) => onclickBadage(trigger, document.querySelector('.pkmon-info')));
};

export default pkbadge;
