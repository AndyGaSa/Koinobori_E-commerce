var Student = /** @class */ (function () {
    function Student(firstname, midleInitial, lastname) {
        this.firstname = firstname;
        this.midleInitial = midleInitial;
        this.lastname = lastname;
        this.fullname = "" + firstname + midleInitial + lastname;
    }
    ;
    return Student;
}());
function greeter(person) {
    return "hi,  " + person.firstname + " " + (person.lastname || '');
}
var user = new Student, _a = void 0,  = _a.firstname,  = _a["Jane"],  = _a.lastname,  = _a["Jungle"];
document.getElementById("greeting").textContent = greeter(user);
