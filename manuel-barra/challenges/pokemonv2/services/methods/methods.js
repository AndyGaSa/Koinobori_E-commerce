function compareName(name) {
  localStorage += name;
  console.log(localStorage);
}
function captureInput() {
  const input = document.getElementById('input-text');
  const valor = input.value;
  if (valor.length > 0) {
    const miObjeto = { name: `${valor}` };
    compareName(miObjeto);
  }
  alert('Insert Name or Id');
}
function createLocalStorage() {
  const myNode = document.getElementById('card-container');
  myNode.innerHTML = '';
  localStorage.setItem('pokemonlocal', allPokemon);
}
function addPokemon() {
  createLocalStorage();
  captureInput();
}
