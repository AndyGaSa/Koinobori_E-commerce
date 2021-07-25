class DetailsPage {
  constructor(pokemon) {
    this.pokemon = pokemon;
  }

  setHero(pokemon) {
    this.pokemon = pokemon;
  }

  setView() {
    const element = `<div class="main__pokestats__container">
            <figure class="main__pokestats__container__figure">
              <img class = "header__logo__img" src="${this.pokemon.sprites}" alt="${this.pokemon.name}">
            </figure>
            <h2 class="main__pokestats__container__poketittle">${this.pokemon.name}</h2>
            <h2 class="main__pokestats__container__type">${this.pokemon.types}</h2>
            <h3 class="main__pokestats__container__base">Base Stats</h3>
            <section class="main__pokestats__container__group">
            <section class="main__pokestats__container__tittles">
              <h3 class="hp-tittle">HP<h3>
              <h3 class="atack-tittle">ATK</h3>
              <h3 class="defense-tittle">DEF</h3>
              <h3 class="specialatack-tittle">SATK</h3>
              <h3 class="specialdefense-tittle">SDEF</h3>
              <h3 class="speed-tittle">SPD</h3>
            </section>
            <section class="main__pokestats__container__progress">
              <progress id="hp-progress" max="100" value="${this.pokemon.stats[0].base_stat}">COSA</progress>
              <progress id="atack-progress" max="100" value="${this.pokemon.stats[1].base_stat}">COSA</progress>
              <progress id="defense-progress" max="100" value="${this.pokemon.stats[2].base_stat}">COSA</progress>
              <progress id="specialatack-progress" max="100" value="${this.pokemon.stats[3].base_stat}">COSA</progress>
              <progress id="specialdefense-progress" max="100" value="${this.pokemon.stats[4].base_stat}">COSA</progress>
              <progress id="speed-progress" max="100" value="${this.pokemon.stats[5].base_stat}">COSA</progress>
            </section>
            </section>
          </div>`;
    const pokemonContainer = document.querySelector('.main__pokestats');
    pokemonContainer.innerHTML += element;
  }
}
