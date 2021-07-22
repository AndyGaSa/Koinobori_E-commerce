class Dashboard {
  constructor(arrayHero) {
    this.arrayHero = arrayHero;
  }

  setView() {
    for (let i = 0; i <= this.arrayHero.length; i += 1) {
      const element = document.createElement('a');
      element.setAttribute('href', `../Details/details.html?id=${this.arrayHero[i].id}`);// element.href=`../Details/details.html?id=${heroes.id}`
      element.innerText = this.arrayHero[i].name;
      const parentElement = document.getElementById('menu');
      parentElement.appendChild(element);
    }
  }
}
const heroList = JSON.parse(localStorage.getItem('heroes'));
const dashboardPage = new Dashboard(heroList.slice(1, 5));
dashboardPage.setView();
