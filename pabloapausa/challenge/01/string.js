class SkylabArray {
    constructor(oldArray) {
        this.oldArray = oldArray;
    }
    
    length() {
        let i = 0; 
        while (this.oldArray[i] !== undefined) {
            ++i;
        }
        console.log(i)
        return i;
    }

    push(value) {
        this.value = value;
        let i = 0; 
        while (this.oldArray[i] !== undefined) {
            ++i;
        }
        this.oldArray[i] = value; 
        console.log(this.oldArray);
        return this.oldArray;
    }

    some(even) {
        this.even = even; 
        let i = 0; 
        while (this.oldArray[i] !== undefined) {
            if (even(this.oldArray[i])) {
                console.log(`true`)
                return true;
            }
            i++;
        }
        console.log(`false`)
        return false;
    }

    find(found) {
        this.found = found; 
        for (let i = 0; this.oldArray[i] !== undefined; i++) {
            if (this.found(this.oldArray[i]))
                return console.log(this.oldArray[i]);
        }
        console.log(`undefined`)
        return undefined;
    }

    filter(result) {
        this.result = result;
        let newArray0 = [];
        for (let i = 0; this.oldArray[i] !== undefined; i++) {
            if (result(this.oldArray[i]))
                newArray0.push(this.oldArray[i]);
        }
        console.log(newArray0)
        return newArray0;
    }

    map(multiply) {
        this.multiply = multiply;
        let newArray1 = [];
        for(let i = 0; this.oldArray[i] !== undefined; i++) {
            if (multiply(this.oldArray[i]))
                newArray1.push(multiply(this.oldArray[i]));
        }
        console.log(newArray1);
        return newArray1;
    }
}

const oldArray = [2, 3, 12, 24];
const value = 1;
const skylabArray = new SkylabArray(oldArray);
const even = (element) => element % 2 === 0;
const found = (element) => element > 10;
const result = (element) => element > 6;
const multiply = (element) => element * 3;

skylabArray.length(); //Returns an integer. 
skylabArray.push(value); //Returns the array. 
skylabArray.some(even); //Returns a boolean. 
skylabArray.find(found); //Returns a value
skylabArray.filter(result); //Returns a new array. 
skylabArray.map(multiply); //Returns a new array. 