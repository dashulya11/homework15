const arr = [1, 2, 3, -1, -2, -3];
function positiveNumbers(arr) {
    const doubleArr = [];
    if (arr.length === 0) return console.log('Массив пустой!');
    for (let i = 0; i < arr.length; i++) {
        if (check(arr[i]) && arr[i] > 0) {
            doubleArr.push(arr[i]);
        }
            
    }
        return doubleArr.length === 0 ? null : doubleArr;
}
function check(numb) {
    if (typeof (numb) === 'number' && !isNaN(+numb)) return true;
    return false;
}
console.log(positiveNumbers(arr));