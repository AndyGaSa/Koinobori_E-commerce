function filter(heroes) {
  console.log(heroes);
  const filterValue = document.getElementById('filter').value;
  if (filterValue !== null) {
    const filterResult = heroes.filter((hero) => hero.name.includes(filterValue.toLowerCase()));
    console.log(filterResult);
  }
}
