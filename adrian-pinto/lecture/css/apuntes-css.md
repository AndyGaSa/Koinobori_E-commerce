# CSS

## Advanced CSS syntax
Los conceptos avanzados incluyen.
### media query
[W3School mediaQueries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)

Las propiedades de css que se especifican en una mediaquery solo se aplican cuando la condicion del media de cumple

~~~css
@media screen and ( min-width: 480px ) {
    body {
        display: none;
    }
}
~~~

En el ejemplo anterior el mediaquery asigna la propiedad display none al tag body en el momento que screen tenga una anchura minima de 480px.

> Es importante poner los media al final del css porque al aplicarse mantienen el flujo natural de CSS

#### Media Rules
Algunas de las condiciones de de media query son las siguientes:
 - Types
   - all
   - print
   - creen
   - speech
 - Features
    - aspect-ratio
    - max-width
    - min-width
### Flex Box
Flex nos permite tener un elemento contenedor que se adapta el espacio libre que tiene a su alrededor.

A su vez los elemento que estan anidados se vuelven sus hijos y pueden posicionarse en su interior de forma flexible.

Puede seguir un flujo de fila o de columna.