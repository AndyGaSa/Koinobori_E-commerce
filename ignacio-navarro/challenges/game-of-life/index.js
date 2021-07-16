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

function findNeighbours(arrElement=[]){
    let newArray = []
    for (let i = 0; i < arrElement.length; i+=1){
        newArray.push([])
        for (let j = 0; j < arrElement[i].length; j+=1){
            let count = 0;
            if (arrElement[i-1] && arrElement[i-1][j-1] && arrElement[i-1][j-1]===1){
                count +=1;
            }
            if (arrElement[i-1] && arrElement[i-1][j] && arrElement[i-1][j]===1){
                count +=1;
            }
            if (arrElement[i-1] && arrElement[i-1][j+1] && arrElement[i-1][j+1]===1){
                count +=1;
            }
            if (arrElement[i] && arrElement[i][j-1] && arrElement[i][j-1]===1){
                count +=1;
            }
            if (arrElement[i] && arrElement[i][j] && arrElement[i][j-1]===1){
                count +=1;
            }
            if (arrElement[i] && arrElement[i][j+1] && arrElement[i][j+1]===1){
                count +=1;
            }
            if (arrElement[i+1] && arrElement[i+1][j-1] && arrElement[i+1][j-1]===1){
                count +=1;
            }
            if (arrElement[i+1] && arrElement[i+1][j] && arrElement[i+1][j]===1){
                count +=1;
            }
            if (arrElement[i+1] && arrElement[i+1][j+1] && arrElement[i+1][j+1]===1){
                count +=1;
            }
            if (count <= 2){
                newArray[i].push(0);
            } else {
                newArray[i].push(1);
            }
        }
    }
    return newArray
}

class gameArray {
    arr: [...Array(6)].map(x => 0);
    }