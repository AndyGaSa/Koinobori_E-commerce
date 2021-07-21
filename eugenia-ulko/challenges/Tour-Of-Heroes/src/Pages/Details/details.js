const transformUrlQueryToObject = require('./transformUrlQueryToObject');

// IIRF
(function detailsPageModel() {
  //  const id = 15;   ///

  /* // acceder a los heroes
    const currentHero = heroes.find((hero) => hero.id === id);

      //   const findCallback = (hero) => hero.id === id;
      //  const currentHero = heroes.find(findCallback);
    // pintar el nombre y el id

    document.getElementById("hero__title").innerHTML = currentHero.name;
    document.getElementById("hero__id").innerHTML = currentHero.id;
    document.getElementById("hero__name").value = currentHero.name;
    }

    // selecciono donde pintar el id y pinto

    /*

    class DetailsPage {
        constructor(id, heroes) {
            this.id = id;
            this.hero = heroes.find(hero) => this.hero.id === id;
        }

        setView() {
    document.getElementById("hero__title").innerHTML = this.Hero.name;
    document.getElementById("hero__id").innerHTML = this.Hero.id;
    document.getElementById("hero__name").value = this.Hero.name;
        }
    }
    */
  const { heroId, slug } = transformUrlQueryToObject(location.search);
  const details = new DetailsPage(+heroId, slug, heroes);
  details.setView();
}());

module.exports = DetailsPage;

/*
(function detailsPageModel() {
  const { heroId } = transformUrlQueryToObject(location.search);
  const details = new DetailsPage(+heroId, heroes);
  details.setView();
}());
*/
