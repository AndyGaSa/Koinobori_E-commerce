function greeter(person) {
    return "Hi " + person;
}
var user = 'Jane User';
document.getElementById('greeting').textContent = greeter(user);
