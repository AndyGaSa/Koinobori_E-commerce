function setIdNewHero() {
  const heroesArraySorted = newSuperHeroes.sort((heroeOne, heroeSecond) => heroeOne.id - heroeSecond.id);
  console.log(heroesArraySorted);
}

function addHeroFn() {
  const newHero = {};
  newHero.name = document.getElementById('new-hero').value.trim();
  setIdNewHero();
}

document.getElementById('add-hero').addEventListener('click', addHeroFn);
