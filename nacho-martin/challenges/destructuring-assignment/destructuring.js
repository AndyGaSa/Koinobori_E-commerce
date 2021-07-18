let a, b, rest;
[a, b] = [10, 20];
[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);



let x = ['Doc', 'Happy', 'Grumpy', 'Bashful', 'Sneezy', 'Sleepy', 'Dopey'];

const [boss, , angry, shy, , skylaber, chilled] = x;
console.log(skylaber);



let a, b, c = null;
[a = 'pretty', b = 'handsome', c = 'ugly'] = ['good', 'bad'];
console.log(a + ' ' + b + ' and ' + c);



let hit = 'it';
let take = 'that';

[hit, take] = [take, hit];
console.log(hit);



const how_to = () => {
        return ['Do it', 'Do it better', 'Do it right'];
    }
    [a, b, c] = how_to();

[, , goal] = how_to();

const [hard, ...rest] = ['work', 'come', 'along']




const good_car = {
    brand: 'chevrolet',
    model: 'camaro coupe ZL1',
    shift: 'manual',
    engine: 'DI v8 supercharged'
}
let brand, model, engine;
({ brand, model, engine } = good_car);
console.log(model);


const meh_car = {
    brand: 'ford',
    model: 'ka',
    shift: 'manual',
    engine: "who cares, it's crap"
}
let { brand, shift } = meh_car;




const skynet = {
    serving: 'machine',
    protect: 'humanity'
}
const { serving: killing, protect: destroy } = skynet;

const product = {
    code: 1234,
    name: 'cereals',
    madeOf: {
        main: 'wheat',
        flavour: 'chocolate'
    }
};

function productSearcher({ code }) {
    return code;
}

function whatIs({ name, madeOf: { flavour } }) {
    return `${flavour} flavoured ${name}`;
}

console.log(whatIs(product));