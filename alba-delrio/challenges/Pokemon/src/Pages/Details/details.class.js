const currentPokemon = JSON.parse(localStorage.getItem('currentPokemon'));

class DetailsPage {
  constructor() {
    this.currentPokemon = currentPokemon;
  }

  setView() {
    const element = `<header id="${this.currentPokemon.type}" class='header-container'><section class="navegation"><div class="navegation__back"></div>
                <span class="currentPokemon-number"></span></section><figure class="image-detail">
                <img id="" src="${this.currentPokemon.img}">
            </figure>
        </header>
        <main class="info">
            <section class="info__properties">
                <h1 class="currentPokemon-name">${this.currentPokemon.name}</h1>
                <h3 id="${this.currentPokemon.type}" class="type-pokemon">${this.currentPokemon.type}</h3>
                <div class="properties__data">
                    <div class="properties__data-1">
                        <span class="data__weight">${this.currentPokemon.weight} KG</span>
                        <span class="data__weight-title">Weight</span>
                    </div>
                    <div class="properties__data-2">
                    <span class="data__height">${this.currentPokemon.height} M</span>
                    <span class="data__height-title">Height</span>
                    </div>
                </div>
            </section>
            <section class="info__stats">
                <h3 class="stats-title">Base Stats</h3>
                <div class="stats-graffics">
                    <div class="graffics-hp">
                        <span class="hp">HP</span>
                        <progress id="progress-hp-bar" max="100" value="${this.currentPokemon.hp}"></progress>
                    </div>
                    <div class="graffics-atk">
                        <span class="atk">ATK</span>
                        <progress id="progress-atk-bar" max="100" value="${this.currentPokemon.attack}"></progress>
                    </div>
                    <div class="graffics-def">
                        <span class="def">DEF</span>
                        <progress id="progress-def-bar" max="100" value="${this.currentPokemon.defense}"></progress>
                    </div>
                    <div class="graffics-spd">
                        <span class="spd">SPD</span>
                        <progress id="progress-spd-bar" max="100" value="${this.currentPokemon.speed}"></progress>
                    </div>
                    
                </div>
            </section>
        </main>`;
    const parentElement = document.getElementById('body-container');
    parentElement.innerHTML = element;
  }
}
