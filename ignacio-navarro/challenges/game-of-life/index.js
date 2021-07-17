function newArray(width,height){
    let arr = [];
    for (let i = 0; i < height; i+=1){
        arr.push([])
        for (let j = 0; j < width; j+=1){
            arr[i].push(0)
        }
    }
    return arr
}

let x = 
[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
[0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

function findNeighbours(arr=[]){
    let newArray = []
    for (let row = 0; row < arr.length; row+=1){
        newArray.push([])
        for (let column = 0; column < arr[row].length; column+=1){

            let count = 0;
            let up = row-1
            let down = row+1
            let left = column-1
            let right = column+1

            if (arr[up] && arr[up][left] && arr[up][left]===1){
                count +=1;
            }
            if (arr[up] && arr[up][column] && arr[up][column]===1){
                count +=1;
            }
            if (arr[up] && arr[up][right] && arr[up][right]===1){
                count +=1;
            }
            if (arr[row] && arr[row][left] && arr[row][left]===1){
                count +=1;
            }
            if (arr[row] && arr[row][column] && arr[row][left]===1){
                count +=1;
            }
            if (arr[row] && arr[row][right] && arr[row][right]===1){
                count +=1;
            }
            if (arr[down] && arr[down][left] && arr[down][left]===1){
                count +=1;
            }
            if (arr[down] && arr[down][column] && arr[down][column]===1){
                count +=1;
            }
            if (arr[down] && arr[down][right] && arr[down][right]===1){
                count +=1;
            }
            if (arr[row][column]===1 && (count === 2 || count === 3) ){
                newArray[row].push(1);
            } else if (count === 3 && arr[row][column]===0) {
                newArray[row].push(1);
            } else {
                newArray[row].push(0)
            }
        }
    }
    console.table(newArray)
    x = newArray;
    return x

}

let times = 10;
let interval = 1000;

for (let i = 0; i < times; i++) {
    setTimeout(findNeighbours(x), i * interval)
}

    


class gameArray {
    arr: [...Array(6)].map(x => 0);
    }