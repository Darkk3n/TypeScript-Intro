function combine(input1: number | string, input2: number | string, resultConv: 'as-number' | 'as-text') {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConv === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    // if (resultConv === 'as-number') {
    //     return +result;
    // }
    // else {
    //     return result.toString();
    // }
    return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedNames = combine('Ger', 'ardo', 'as-text');
console.log(combinedNames);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);