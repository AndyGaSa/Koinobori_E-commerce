class HeroesPage {
  constructor(newSuperHeroes) {
    this.heroes = newSuperHeroes;
  }

  setView() {
    this.heroes.forEach((hero) => {
      const element = `<li>
            <a href="../Details/details.html?heroId=${hero.id}">
            <span class="badge">${hero.id}</span> ${hero.name}
            </a>
            <button class="delete" title="delete hero" id="clickedDelete" onclick="deleteFn()">x</button>
        </li>`;

      const parentElement = document.getElementById('heroes__list');
      parentElement.innerHTML += element;
    });
  }
}
