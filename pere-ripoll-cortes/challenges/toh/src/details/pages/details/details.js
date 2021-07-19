//Acceder a los heroes
/*(function details() {
   const id = 14; //Hacer el en challenge
   const findCallback = (hero) => hero.id === id;
    const currentHero = heroes.find(findCallback);

// pintar el nombre y el id
document.getElementById('hero_id').innerHTML = currentHero.id;
document.getElementById('hero_name').value = currentHero.name;
document.getElementById('hero_title').innerHTML = currentHero.name;
})()*/


class DetailsPage{
    constructor(id, heroes){
        this.id = id;
        this.hero = heroes.find((hero) => hero.id === id);
    }

    setView(){
        document.getElementById('hero_id').innerHTML = this.hero.id;
        document.getElementById('hero_name').value = this.hero.name;
        document.getElementById('hero_title').innerHTML = this.hero.name;   
    }
}
//const heroId = getId(location.search);
const heroId = 11;
const details = new DetailsPage(heroId, heroes)