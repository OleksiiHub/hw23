let arr = [1, 2, 3, 4, 12, 'string', 7, undefined, 8, 9];
let min = arr[0];
let max = min;
let sum = 0;
for (let i = 0; i < arr.length; ++i) {
    if (typeof arr[i] === "number") {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
        sum = sum + arr[i];
    }
}
console.log(max);
console.log(min);
console.log(sum);