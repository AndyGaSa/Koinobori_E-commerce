// acceder a los heroes
(function detailsPageModel() {
    const { heroId } = transformUrlQueryToObject(location.search);
    const details = new DetailsPage(+heroId, heroes);
    details.setView();
  }());


// (function details() {
//     const id = 11;
//     const currentHero = heroes.find((hero) => hero.id === id);
    
//     document.getElementById('hero__title').innerHTML = currentHero.name;
//     document.getElementById('hero__id').innerHTML = currentHero.id;
//     document.getElementById('hero__name').value = currentHero.name;
// })()

// buscar el que tiene el id 5
// const hero = new Hero(heroes.find(15));

// pintar el nombre y el id


// selecciono donde pintar el id y pinto

// selecciono donde pinter el nombre y pinto

// class DetailsPage {
//     constructor(id, heroes) {
//         this.id = id;
//         this.hero = heroes.find((hero) => hero.id === id)
//     }

//     setView(){
//         document.getElementById('hero__title').innerHTML = currentHero.name;
//         document.getElementById('hero__id').innerHTML = currentHero.id;
//         document.getElementById('hero__name').value = currentHero.name;
//     }
// }




