let arr = [1,2,3,4,[1,2,3],[1,[2],3]];

function flatArr(arr) {
    let resul = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            resul = resul.concat(flatArr(arr[i]));
        } else {
            resul.push(arr[i]);
        }
    }
    return resul;
}

console.log(flatArr(arr));