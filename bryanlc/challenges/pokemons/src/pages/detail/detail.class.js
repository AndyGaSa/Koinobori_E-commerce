class DetailPage {
  getpokemon(pokemon) {
    this.pokemon = pokemon;
  }

  setview() {
    this.pokemonDetails();
    this.pokemonFoto();
    this.forms();
  }

  pokemonFoto() {
    const imagen = document.getElementById('imagen');
    const imgCarta = document.createElement('img');
    imgCarta.src = this.pokemon.sprites.front_shiny;
    imagen.appendChild(imgCarta);
  }

  pokemonDetails() {
    const entriesApparence = Object.entries(this.pokemon);

    const parentElement = document.getElementById('lista');

    for (let i = 0; i < entriesApparence.length; i += 1) {
      const li = document.createElement('li');
      const arrayapparence = entriesApparence[i];
      li.innerText = `${arrayapparence[0]}:  ${arrayapparence[1]}`;
      parentElement.appendChild(li);
    }
  }

  forms() {
    const entriesApparence = Object.entries(this.pokemon.forms);

    const parentElement = document.getElementById('lista');

    for (let i = 0; i < entriesApparence.length; i += 1) {
      const li = document.createElement('li');
      const arrayapparence = entriesApparence[i];
      li.innerText = `${arrayapparence[0]}:  ${arrayapparence[1]}`;
      parentElement.appendChild(li);
    }
  }
}
