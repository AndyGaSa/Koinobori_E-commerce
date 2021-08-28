interface Person {
    firstname: string,
    lastname?: string
}

function greeter (person: Person): string {
    return `Hi, ${person.firstname} ${person.lastname || ''}`;
}

const user = {firstname: 'Jane', lastname: 'User'}

document.getElementById('greeting').textContent = greeter(user)