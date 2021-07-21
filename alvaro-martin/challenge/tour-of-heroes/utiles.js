function filter(heroes) {
  console.log(heroes);
  const filterValue = document.getElementById('filter').value;
  if (filterValue !== null) {
    const filterResult = heroes.filter((hero) => hero.name.includes(filterValue.toLowerCase()));
    console.log(filterResult);
  }
}

const deleteButton = document.getElementsByClassName('delete');
deleteButton.addEventListener('click', logEvent);

function logEvent(event) {
  console.log(event);
}
