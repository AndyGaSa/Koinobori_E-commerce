function setIdNewHero() {
  const heroesArraySorted = newSuperHeroes.sort((heroeOne, heroeSecond) => heroeOne.id - heroeSecond.id);
  const newId = heroesArraySorted[heroesArraySorted.length - 1].id + 1;
  return newId;
}

function addHeroFn() {
  const newHero = {};
  newHero.id = setIdNewHero();
  newHero.name = document.getElementById('new-hero').value.trim();
  newSuperHeroes.push(newHero);
  localStorage.setItem('newSuperHeroes', JSON.stringify(newSuperHeroes));
  console.log(newSuperHeroes);
}

/* function deleteHeroFn() {

} */

document.getElementById('add-hero').addEventListener('click', addHeroFn);
