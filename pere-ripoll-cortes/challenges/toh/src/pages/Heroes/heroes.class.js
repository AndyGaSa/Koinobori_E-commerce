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
            <button class="delete" title="delete hero">x</button>
        </li>`;

      const parentElement = document.getElementById('heroes__list');
      parentElement.innerHTML += element;
    });
  }

  addHeroes(name) {
    console.log(name);
    const maxId = (this.heroes.length) + 2;
    this.heroes.push({ id: maxId, name });
    localStorage.setItem('heroesLocal', JSON.stringify(this.heroes));
    heroes = JSON.parse(localStorage.getItem('heroesLocal'));
  }
}
