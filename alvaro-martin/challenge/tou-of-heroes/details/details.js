
(function destails (){

const id = 12 ;
const currentHero = heroes.find((hero)=> hero.id === id)

document.getElementById('hero__id').innerHTML = currentHero.id;
document.getElementById('hero__name').value = currentHero.name;

})()
