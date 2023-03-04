let arr = [1, 2, 3, 4, false, 'string', 7, undefined, 8, 9];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== Number) {
         newArr.push(arr[i]);
         console.log(newArr)

    }

}
