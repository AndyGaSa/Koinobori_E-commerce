class HeroesPage {
  constructor(superHeroes) {
    this.superHeroes = superHeroes;
  }

  paintAllHeroes() {
    this.superHeroes.forEach((hero) => {
      const element = `<li>
            <a href="../details/details.html?slug=${hero.slug}">
            <span class="badge">${hero.id}</span> ${hero.name}
            </a>
            <button class="delete" title="delete hero">x</button>
        </li>`;

      const parentElement = document.getElementById('heroes__list');
      parentElement.innerHTML += element;
    });
  }
}
