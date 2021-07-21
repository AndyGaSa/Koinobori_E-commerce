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
      spanElement.classList.add('badge');
      buttonElement.classList.add('delete');
      buttonElement.innerHTML = 'X';
      buttonElement.id = `delete-hero`
      linkElement.href = (`../details/details.html?heroId=${hero.id}`);
      const dashboardDOM = document.getElementById('hero-list-DOM');
      spanElement.innerHTML = hero.id;
      listElement.appendChild(linkElement);
      linkElement.appendChild(spanElement);
      linkElement.append(`${hero.name}`);
      listElement.appendChild(buttonElement);
      dashboardDOM.appendChild(listElement);
    });

  }
}
