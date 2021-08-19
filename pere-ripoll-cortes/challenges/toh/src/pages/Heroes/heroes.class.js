class HeroesPage {
  constructor(heroes) {
    this.heroes = heroes;
  }

  setView() {
    this.heroes.forEach((hero) => {
      const element = `<li>
            <a href="../Details/details.html?heroId=${hero.id}">
            <span class="badge">${hero.id}</span> ${hero.name}
            </a>
            <button id=${hero.id} class='delete' onclick="HeroesPage.deleteHero(this.id)" title="delete hero">x</button>
        </li>`;

      const parentElement = document.getElementById('heroes__list');
      parentElement.innerHTML += element;
    });
  }

  addHeroes(name) {
    const maxId = (this.heroes.length) + 2;
    this.heroes.push({ id: maxId, name });
    localStorage.setItem('superHeroData', JSON.stringify(this.heroes));
    heroes = JSON.parse(localStorage.getItem('superHeroData'));
  }

  static deleteHero(id) {
    const arr = heroes.filter((x) => x.id !== parseInt(id));
    localStorage.setItem('superHeroData', JSON.stringify(arr));
    window.location.reload();
  }
}
