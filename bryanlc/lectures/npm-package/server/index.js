const riki = require('riki-pakaje');

function welcome(name){
    console.log(`bienvenido ${name}`)
    const num = Math.random();
    console.log(`tienes ${num} años`)

    riki('bryan');
}
module.exports = welcome;