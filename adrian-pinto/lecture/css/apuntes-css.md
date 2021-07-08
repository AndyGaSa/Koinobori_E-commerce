# CSS

## Advanced CSS syntax

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