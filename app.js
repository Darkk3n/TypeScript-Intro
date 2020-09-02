function add(n1, n2, print, phrase) {
    if (print) {
        console.log(phrase + ": " + (n1 + n2));
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 2.9;
var printResult = true;
var resultPhrase = 'Result is';
add(number1, number2, printResult, resultPhrase);
