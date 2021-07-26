/* eslint-disable import/extensions */
import catchPkmn from '../../modules/fetch-api.js';
import pkbadge from '../../modules/pkbadge.js';
/**
 * - Traer los datos guardados de local storage para
 *     Options y el offset llamado con anterioridad
 * - Añadir los eventos en los botones
 * *    Anterior
 * *    Siguiente
 *     Details
 * *    Equipo pkmn
 *     Filtros - despliega los filtros
 * *- Crear un nuevo badge por cada pkmn recibido
 * *    Cada badge tendra un evento onlcick que actualizara el aside con los datos del pkmn clicado
 *
 */
const refreshCrate = async (dataToRefresh) => {
  const pkmnIncrate = await catchPkmn(dataToRefresh);
  const crate = document.querySelectorAll('.cajaPkmn img');
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.previous-btn');
  const nexturi = pkmnIncrate.next !== null ? new URL(pkmnIncrate.next) : '';
  const prevuri = pkmnIncrate.previous !== null ? new URL(pkmnIncrate.previous) : '';
  pkmnIncrate.results.forEach((pokemon, index) => {
    pkbadge(pokemon, crate[index]);
  });
  nextBtn.setAttribute('data-url', typeof nexturi.search === 'string' ? nexturi.search : '#');
  prevBtn.setAttribute('data-url', typeof prevuri.search === 'string' ? prevuri.search : '#');
};

document.querySelector('.next-btn').addEventListener('click', (trigger) => {
  if (trigger.target.dataset.url !== '#') refreshCrate(trigger.target.dataset.url);
});
document.querySelector('.previous-btn').addEventListener('click', (trigger) => {
  if (trigger.target.dataset.url !== '#') refreshCrate(trigger.target.dataset.url);
});

refreshCrate('?limit=30&offset=0');
