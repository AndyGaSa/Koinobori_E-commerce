function calculatorPro() {

    function Decimales(parametroFinal) {
        parametroFinal = parseFloat(parametroFinal);
        if (Number.isInteger(parametroFinal) === false) {
            parametroFinal = parametroFinal.toFixed(3);
        }
        return parametroFinal;
    }

    let Nums = [];
    let parametrosUser = prompt('Introduce un numero: ', 'Introducelo aqui');
    let check = isNaN(parametrosUser);
    while (check === true) {
        parametrosUser = prompt('No has introducido un numero valido , vuelve a escribirlo: ', 'Introducelo aqui');
        check = isNaN(parametrosUser);
    };

    parametrosUser = Decimales(parametrosUser);
    Nums.push(parametrosUser);

    let parametrosUser2 = 0;

    while (parametrosUser2 != null) {
        parametrosUser2 = prompt('Introduce otro numero o cancela si quieres parar: ', 'Introducelo aqui o Cancela');
        if (parametrosUser2 != null) {
            var check2 = isNaN(parametrosUser2);
            while (check2 === true) {
                parametrosUser2 = prompt('No has introducido un numero valido , vuelve a escribirlo: ', 'Introducelo aqui o pulsa Cancelar');
                check2 = isNaN(parametrosUser2);
            };
            if (parametrosUser2 != null) {
                parametrosUser2 = Decimales(parametrosUser2);
                Nums.push(parametrosUser2);
            }
        }
    }

    let resultados = [];
    const NumsLength = Nums.length;

    if (NumsLength === 1) {
        console.log('La raiz quadrada de ' + parametrosUser + ' es ' + Math.sqrt(parametrosUser));
    } else {

        let suma = Nums[0];
        for (x = 1; x < NumsLength; x++) {
            suma = suma + Nums[x];
        }
        resultados.push(suma);
        resultados[0] = Decimales(resultados[0]);

        let resta = Nums[0];
        for (x = 1; x < NumsLength; x++) {
            resta = resta - Nums[x];
        }
        resultados.push(resta);
        resultados[1] = Decimales(resultados[1]);

        let multiplicar = Nums[0];
        for (x = 1; x < NumsLength; x++) {
            multiplicar = multiplicar * Nums[x];
        }
        resultados.push(multiplicar);
        resultados[2] = Decimales(resultados[2]);

        let dividir = Nums[0];
        for (x = 1; x < NumsLength; x++) {
            dividir = dividir / Nums[x];
        }
        resultados.push(dividir);
        resultados[3] = Decimales(resultados[3]);


        console.log('El resultado de la suma de tus numeros es ' + resultados[0] +
            '\nEl resultado de la resta es ' + resultados[1] +
            '\nEl resultado de la multiplicacion es ' + resultados[2] +
            '\nEl resultado de la division es ' + resultados[3]);

    }
};

calculatorPro();

let Confirmacion = true;

while (Confirmacion != false) {

    Confirmacion = confirm('Quieres hacer otro calculo?');

    if (Confirmacion == true) {
        calculatorPro();
    } else {
        alert('Hasta pronto!');
    }

}