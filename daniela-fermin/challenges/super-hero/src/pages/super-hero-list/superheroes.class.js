class HeroesPage {
  constructor(superHeroes) {
    this.superHeroes = superHeroes;
  }

  paintAllHeroes(superHeroes) {
    document.getElementById('new-hero').value = ('');
    this.superHeroes = superHeroes;
    this.superHeroes.forEach((hero) => {
      const element = `<li>
            <a href="../details/details.html?slug=${hero.slug}">
            <span class="badge">${hero.id}</span> ${hero.name}
            </a>
            <button onclick="deleteHero()" class="delete" title="delete hero">x</button>
        </li>`;

      const parentElement = document.getElementById('heroes__list');
      parentElement.innerHTML += element;
    });
  }

  paintNewHero(newHero) {
    this.superHeroes.push(newHero);
    const element = `<li>
              <a href="../details/details.html?slug=${newHero.slug}">
              <span class="badge">${newHero.id}</span> ${newHero.name}
              </a>
              <button class="delete" title="delete hero">x</button>
          </li>`;

    const parentElement = document.getElementById('heroes__list');
    parentElement.innerHTML += element;
  }

  paintFilteredHeroes(filteredHeroes) {
    this.superHeroes = filteredHeroes;
    this.superHeroes.forEach((hero) => {
      const element = `<li>
            <a href="../details/details.html?slug=${hero.slug}">
            <span class="badge">${hero.id}</span> ${hero.name}
            </a>
            <button class="delete" title="delete hero">x</button>
        </li>`;
      document.getElementById('heroes__list').innerHTML = ('');
      const parentElement = document.getElementById('heroes__list');
      parentElement.innerHTML += element;
    });
  }
}
