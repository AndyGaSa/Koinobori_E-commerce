const pkcard = (pkmn) => `<article class='pkteam__pkcard' pkid="${pkmn.id}"><aside><h2>${pkmn.id}</h2></aside><img src="${pkmn.sprites.front_default}" alt="${pkmn.name}"><h3>${pkmn.name}</h3></article>`;

export default pkcard;
