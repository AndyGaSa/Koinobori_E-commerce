class DashboardPage {
  constructor(heroes) {
    this.heroes = heroes.slice(1, 5);
  }

  setView() {
    this.heroes.forEach((hero) => {
      const element = document.createElement('a');
      const parentElement = document.getElementById('dashboard__heroes');
      element.href = `../Details/details.html?heroId=${hero.id}`;
      element.innerText = hero.name;
      parentElement.appendChild(element);
    });
  }
}
