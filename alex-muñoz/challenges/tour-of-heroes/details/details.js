//acceder a los heroes

//buscar el que tiene el id 15

(function details(){
    const id = 13 //Todo hacer en el challange
    const currentHero = heroes.find((hero)=>hero.id === id)
    //pintar el nombre y el id
    // selecciono donde pintar el id y pinto
document.getElementById('hero__title').innerHTML= currentHero.name;  
document.getElementById('hero__id').innerHTML= currentHero.id;
//selecciono donde pintar el nombre y pinto
document.getElementById('hero__name').value= currentHero.name;

})();

//'location' para acceder a la url y todos los datos.