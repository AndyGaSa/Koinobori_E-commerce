class HeroesCard {
  constructor(heroes) {
    this.heroes = heroes;
  }

  setViews() {
    this.heroes.forEach((hero) => {
      const listElement = document.createElement('li');
      const linkElement = document.createElement('a');
      const spanElement = document.createElement('span');
      const buttonElement = document.createElement('button');
      linkElement.appendChild(spanElement);
      listElement.appendChild(linkElement);
      listElement.appendChild(buttonElement);
      spanElement.classList.add('badge');
      buttonElement.classList.add('delete');
      spanElement.innerHTML = hero.id;
      linkElement.href = (`../details/details.html?heroId=${hero.id}`);
      linkElement.innerHTML = hero.name;
      const dashboardDOM = document.getElementById('hero-list-DOM');
      dashboardDOM.appendChild(listElement);
    });
  }
}
