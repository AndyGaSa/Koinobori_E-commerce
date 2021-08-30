var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hi " + person.firstName + " " + (person.lastName || '');
}
var user = new Student('Pablo', '', 'Apausa');
document.getElementById('greeting').textContent = greeter(user);
