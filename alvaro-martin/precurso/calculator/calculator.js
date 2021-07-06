


function calcu (num1 , num2 ){

    if( isNaN(num1) && isNaN(num2)){
       console.log('Introducir Numero valido');
        }
        else if(Number.isFinite(num1) && isNaN(num2) ){
            if ( Number.isInteger(Math.sqrt(num1))){
                console.log(Math.sqrt(num1));
            }
            else { console.log(Math.sqrt(num1).toFixed(3));
            }
        }
        else if( Number.isFinite(num2)&& isNaN(num1) ){
            if ( Number.isInteger(Math.sqrt(num2))){
                console.log(Math.sqrt(num2));
            }
            else { console.log(Math.sqrt(num2).toFixed(3));
            }
        }


        function suma (){
            if ( Number.isInteger(num1 + num2)){
                return (num1 + num2);
            }
            return (num1 + num2).toFixed(3);
        }

        function resta (){
            if ( Number.isInteger(num1 - num2)){
                return (num1 - num2);
            }
            return (num1 - num2).toFixed(3);
        }

        function multi (){
            if ( Number.isInteger(num1 * num2)){
                return (num1 * num2);
            }
            return (num1 * num2).toFixed(3);
        }

        function divi (){
            if ( Number.isInteger(num1 / num2)){
                return (num1 / num2);
            }
            return (num1 / num2).toFixed(3);    
        }


    if ( Number.isFinite(num1) && Number.isFinite(num2)){
        console.log ( 
        'Resultados:\n' +
    
        'El resultado de la suma es: ' + suma() +
        '\nEl resultado de la resta es: ' + resta() +
        '\nEl resultado de la división es: ' + divi() +
        '\nEl resultado de la multiplicación es: ' + multi() 
        )
    
}
}
console.log (calcu( 4,6));