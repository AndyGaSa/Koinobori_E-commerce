class Student{
    fullname

    constructor(
        public firstname:string,
        public midleInitial:string,
          public lastname:string ){

        this.fullname=`${firstname}${midleInitial}${lastname}`
    };
}

interface Person {
    firstname: string,
    lastname?: string
    //? tipado como opcional no tiene que ser obligatorio sin ? si es obligatorio
}

function greeter(person:Person):string {
    return `hi,  ${person.firstname} ${person.lastname || ''}`
}

const user= new Student{firstname:'Jane',lastname:'Jungle'}
document.getElementById("greeting").textContent = greeter(user);
