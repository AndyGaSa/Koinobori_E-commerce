class Dashboard {
  constructor(heroes) {
    this.heroes = heroes;
  }

  setView() {
    this.heroes.forEach((hero) => {
      const page = document.querySelector('#dashboard__heroes');
      const element = `<li>
      <a href="../Details/details.html?id=${hero.id}">
      <span class="badge">${hero.id}</span> ${hero.name}
      </a>
      <button class="delete" title="delete hero">X</button>
  </li>`;
      page.innerHTML += element;
    });
  }
}

module.exports = Dashboard;
