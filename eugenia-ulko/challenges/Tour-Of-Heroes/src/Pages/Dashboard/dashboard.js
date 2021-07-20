class DashboardButton {
  constructor(id) {
    this.id = heroes[id].id;
    this.href = `../details/details.html?id=${this.id}`;
    this.htmlId = `h2__link${id}`;
    this.currentHeroName = heroes[id].superhero;
    console.log(this.currentHeroName);
  }

  getInfo() {
    document.getElementById(this.htmlId).innerHTML = this.currentHeroName;
    document.getElementById(this.htmlId).setAttribute('href', this.href);
  }
}

for (let id = 0; id < 4; id += 1) {
  const button = new DashboardButton(id);
  button.getInfo();
}
