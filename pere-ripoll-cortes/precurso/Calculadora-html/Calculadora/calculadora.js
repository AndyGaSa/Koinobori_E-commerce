//Variable para acceder a la pantalla de la calculadora. 
let screen = document.querySelector('#screen-result');
/*Variable para controlar el resultado. Después de utilizar la función 
calculate() si el usuario introduce un número se borrara el resultado anterior, pero
si utiliza una operación podrá mantener el resultado anterior.*/
let result = false;
//Variable para controlar que no aparezcan en pantalla de forma seguida símbolos de operaciones.
let op = false;


//función para introducir el valor del usuario.
function getNumber(ref) {
    op = false;
    changeColor();
    //Se revisa si la calculadora tiene en pantalla un resultado previo.
    if(!result){
        //Si no hay resultado, se escribe  el valor deseado.
        let value = ref.value;
        screen.value += value;
    }else{
        /*Si hubiera un resultado en pantalla:
        1º se limpia
        2º se indica que ya no hay resultado.
        3º se ejecuta de nuevo la función para guardar el nuevo valor.*/
        clean();
        result = false;
        getNumber(ref);
    }
}

//función para introducir el tipo de operación.
function getOp(ref){
    //Si no se ha introducido aún ninguna operación
    if(!op){
        let value = ref.value;
        screen.value += value;
        result = false;
        op = true;

    //Si ya se hubiera introducido se elimina la anterior y se añade la nueva.
    }else{
        R();
        let value = ref.value;
        screen.value += value;
    }
}

//Función para eliminar el último valor del resultado "screen.value"
function R() {
    let text = screen.value;
    screen.value = text.substring(0, text.length - 1);
}

//Función para eliminar todos los datos introducidos. 
function clean() {
    screen.value = ' ';
}

//Función para calcular el resultado.
function calculate() {
    let text = screen.value;
    //Si el último valor del resultado es un operator, se elimina para evitar un error. 
    if(text[text.length-1] == "+" || text[text.length-1] == "-" || text[text.length-1] == "*" || text[text.length-1] == "/" || text[text.length-1] == "."){
        R();
    }
    try {
        //Se realiza la operación con la función eval()
        screen.value = eval(screen.value);
        result = true;
    } catch (error) {
        screen.value = 'Error';
        setTimeout(()=> {
            clean();
        }, 500)
    }
}


function changeColor() {
    const h1 = document.getElementById('titulo');
    let valor = Math.random() * 255;
    let valor1 = Math.random() * 255;
    let valor2 = Math.random() * 255;
    h1.style.color = 'rgb('+ valor +','+ valor1 +',' + valor2+')';
}