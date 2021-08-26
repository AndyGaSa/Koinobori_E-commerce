function greeter(person) {
    return "Hi, " + person.firstname + " " + (person.lastname || '');
}
var user = { firstname: 'Jane', lastname: 'User' };
document.getElementById('greeting').textContent = greeter(user);
