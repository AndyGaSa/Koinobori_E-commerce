class HeroesPage {
  constructor(heroes) {
    this.heroList = heroes;
  }

  setView() {
    this.heroList.forEach((hero) => {
      const element = `<li *ngFor="let hero of heroes">
          <a href="../details/details.html?id=${hero.id}">
            <span class="badge">${hero.id}</span> ${hero.name}
          </a>
          <button class="delete" title="delete hero"">x</button>
        </li>`;

      document.getElementById('hero-list').innerHTML += element;
    });
  }
}

module.exports = HeroesPage;
