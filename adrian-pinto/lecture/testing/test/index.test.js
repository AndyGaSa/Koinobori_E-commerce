import { calculadora } from '../index.js';
const calc = calculadora

describe( 'Constructor', () => {

    test( 'Existe suma?', () => {
        expect( calc.sum ? true : false ).toBe( true )
    });
    test( 'Existe resta?', () => {
        expect( calc.sub ? true : false ).toBe( true )
    });
    test( 'Existe producto?', () => {
        expect( calc.pro ? true : false ).toBe( true )
    });
    test( 'Existe division?', () => {
        expect( calc.div ? true : false ).toBe( true )
    });
})

describe( 'Operaciones matematicas', () => {

    it( 'Realizamos la suma', () => {
        expect( calc.sum( 1, 1 ) ).toBe( 2 );
    });

    test( 'Realizamos la resta', () => {
        expect( calc.sub( 15, 20 ) ).toBe( 5 );
    });

    test( 'Realizamos la multiplicacion', () => {
        expect( calc.pro( 2, 3 ) ).toBe( 6 );
    });

    test( 'Realizamos la division', () => {
        expect( calc.div( 100, 5 ) ).toBe( 20 );
    });

})