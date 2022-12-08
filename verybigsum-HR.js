function aVeryBigSum(ar) {
    let sum = 0;
    for (let index = 0; index < ar.length; index += 1) {
        sum = sum + ar[index];

    }

    return sum;

}

console.log(aVeryBigSum([10, 20, 30, 40, 50]));