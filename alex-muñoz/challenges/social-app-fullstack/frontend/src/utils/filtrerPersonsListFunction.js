export default function filterPersonsList(inputValue, userList) {
  let personsList = userList;
  personsList = personsList.filter((person) => person.name.includes(inputValue));
  return personsList;
}
