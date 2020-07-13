// question 1
// let array = [1, 3, 5, 7, 9];

// q2
// names.split('-');

// q3
// let array = [];
// for (let i = 0; i < 400; i++) {
//     array.push('algorithm');
// }

// q4
// let array = [];
// for (let i = 20; i <= 800; i += 4) {
//     array.push(i);
// }

// q4
function createRandomArray(n, low, high) {
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push(randomDec(low, high));
    }
    return array;
}