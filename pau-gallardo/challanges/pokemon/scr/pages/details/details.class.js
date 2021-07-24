class DetailsPage {
    constructor(pokemon) {
      this.pokemon = pokemon;
    }
  
    setHero(pokemon) {
      this.pokemon = pokemon;
    }
  
    setView() {
      document.getElementById('pokemon__title').innerHTML = this.pokemon?.name;
      document.getElementById('pokemon__id').innerHTML = this.pokemon?.id;
      document.getElementById('pokemon__name').innerHTML = this.pokemon?.name;
    }
  }