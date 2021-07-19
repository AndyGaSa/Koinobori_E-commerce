class Dashboard {
  constructor(heroes, initialPosition, number) {
    this.top = [];
    for (let position = initialPosition - 1; position < initialPosition + number; position += 1) {
      this.top.push({ id: heroes[position].id, superhero: heroes[position].superhero });
    }
  }

  giveMeHeroes() {
    const page = document.querySelector('#printedHeroes');
    page.classList.add('link-container');

    this.top.forEach((hero) => {
      const link = document.createElement('a');
      link.setAttribute('href', `../Details/details.html?id=${hero.id}`);
      link.innerHTML = hero.superhero;
      page.appendChild(link);
    });
  }
}
