function imAlive(arr, x, y) {
//TL x-1 y-1
//T x y-1
//TR x+1 y-1
//R x+1 y
//RB x+1 y+1 
//B x y+1
//BL x-1 y
//L x-1 y   

let count = 0;
//TL
if (x !== 0 && y !==0){
    //Look TL neighbour
    if (arr[x-1][y-1] === 1){
        count++;
    }
}
//T
if (y !==0){
    //Look T neighbour
    if (arr[x][y-1]){
        count++;
    }
}
