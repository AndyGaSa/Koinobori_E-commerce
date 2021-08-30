class Student {
    fullName: string;

    constructor (
        public firstName: string,
        public middleName: string,
        public lastName: string
    ){
        this.fullName = `${firstName} ${middleName} ${lastName}`
    }
}

interface Person {
    firstName: string,
    lastName?: string
}

function greeter(person: Person): string {
    return `Hi ${person.firstName} ${person.lastName || ''}`
}

let user = new Student('Pablo', '', 'Apausa');

document.getElementById('greeting').textContent = greeter(user);