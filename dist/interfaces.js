"use strict";
//type AddFn = (a: number, b: number) => number;
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.name = n;
    }
    greet(phrase) {
        console.log(`'${phrase} ${this.name}'`);
    }
}
let user1;
user1 = new Person('Gerardo');
user1.greet('Hello');
console.log(user1);
//# sourceMappingURL=interfaces.js.map