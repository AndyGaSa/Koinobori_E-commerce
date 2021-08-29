var Student = /** @class */ (function () {
    function Student(firstname, middleInitial, lastname) {
        this.firstname = firstname;
        this.middleInitial = middleInitial;
        this.lastname = lastname;
        this.fullname = firstname + " " + middleInitial + " " + lastname;
    }
    return Student;
}());
function greeter(person) {
    return "Hi, " + person.firstname + " " + (person.lastname || '');
}
var user = new Student('Jane', 'M', 'User');
document.getElementById("greeting").innerText = greeter(user);
