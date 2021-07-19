//acceder a los heroes y buscar el que tiene el id 15

(function details(){
    const id = 13 //Todo hacer en el challange
    const currentHero = heroes.find((hero)=>hero.id === id)
    //pintar el nombre y el id
    // selecciono donde pintar el id y pinto
    document.getElementById('hero__title').innerHTML= currentHero.name;  
    document.getElementById('hero__id').innerHTML= currentHero.id;
    document.getElementById('hero__name').value= currentHero.name;

})();
/* Segunda manera de hacer lo mismo que lo anterior.
//'location' para acceder a la url y todos los datos.
class DetailsPage(){
    constructor(id,heroes){
        this.id = id;
        this.hero = heroes.find((hero)=>hero.id ===id)
    }
    setView(){
        document.getElementById('hero__title').innerHTML= currentHero.name;  
        document.getElementById('hero__id').innerHTML= currentHero.id;
        document.getElementById('hero__name').value= currentHero.name;
    }
}
const heroId = getId(location.search)
const details = new DetailsPage(heroId,heroes);
details.setView();
*/