/* const myAddButton = document.getElementById('add-hero');
myAddButton.addEventListener('click', addHeroButton()); */
/*
getHeroDetails(heroes) {
    const result = heroes.find((obj) => obj.id === Number(this.id));
    return result;
  } */

// declarar una funcion que sea´r invocada cada vez que se hace click al boton add
function setIdToNewHero() {
  const heroesArraySort = heroes1.sort((heroeA, heroeZ) => heroeA.id - heroeZ.id);
  const newId = heroesArraySort[heroesArraySort.length - 1].id + 1;
  return newId;
}

function addHero() {
  const newHero = {};
  newHero.id = setIdToNewHero();
  newHero.name = document.getElementById('new-hero').value.trim();
  heroes1.push(newHero);
  localStorage.setItem('heroes', JSON.stringify(heroes1));
  /* if (newHero === "") {

  }
  else {

  } */
}
// definir un objeto que debera tener id y name

// el nombre nos lo da el user a través del input de tipo texto
// definir el siguiente numero de id
// asignar un id al objeto
// crear la propiedad nombre
// asignar el nombre al objeto
// declarar una variable a la que se le asignará la info que esta en el local storage
// añadir el objeto a la variable del  local storage
// subir el objeto al localStorage: SET
