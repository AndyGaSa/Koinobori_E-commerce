import catchPkmn from './src/modules/fetch-api.js';

if (!localStorage.pkmnList) {
  const listTosave = await catchPkmn('?limit=151&offset=0');
  listTosave.results.forEach( pkmn => {
    let uri = new URL(pkmn.url)
    uri = uri.pathname.split('/')
    pkmn.id = uri[4]
  });
  localStorage.setItem('pkmnList', JSON.stringify(listTosave.results));
}

window.location.href = './src/pages/equipo-pkmn/equipo.html';
