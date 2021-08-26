function greeter(person: string): string {
    return `Hi ${person}`
}

const user = 'Jane User';

document.getElementById('greeting').textContent= greeter(user);