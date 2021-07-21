class DetailsPage {
    
    constructor(id, slug, heroes) {
      this.id = id;
      this.slug = slug;
      this.hero = heroes?.find((hero) => hero.id === id);
      
    }
  
    setView() {
      this.setImage();
      this.setTitleHero();
      this.setPowerstats();
      
    }

    setImage() {
      document.getElementById('hero__image').src = this.hero.images.sm;
    }


    setTitleHero() {
      document.getElementById('hero__title').innerHTML = this.hero.name;
      document.getElementById('hero__id').innerHTML = this.hero.id;
      document.getElementById('hero__name').value = this.hero.name;
    }

    setPowerstats() {
      document.getElementById('hero__powerstats--intelligence').innerHTML = this.hero.powerstats.intelligence;
      document.getElementById('hero__powerstats--strength').innerHTML = this.hero.powerstats.strength;
      document.getElementById('hero__powerstats--speed').innerHTML = this.hero.powerstats.speed;
      document.getElementById('hero__powerstats--durability').innerHTML = this.hero.powerstats.durability;
      document.getElementById('hero__powerstats--power').innerHTML = this.hero.powerstats.power;
      document.getElementById('hero__powerstats--combat').innerHTML = this.hero.powerstats.combat;
    }


  }
  
  module.exports = DetailsPage;
  