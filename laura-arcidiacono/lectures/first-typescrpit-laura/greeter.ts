class Student {
    fullname: string;

    constructor(
        public firstname, 
        public middleInitial, 
        public lastname) {
        this.fullname = `${firstname} ${middleInitial} ${lastname}`
    }
}

interface Person {
    firstname: string,
    lastname?: string
}

function greeter(person: Person): string {
    return `Hi, ${person.firstname} ${person.lastname || ''}`;
}

const user = new Student('Jane', 'M', 'User');

document.getElementById("greeting").innerText = greeter(user);