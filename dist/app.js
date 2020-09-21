"use strict";
class Person {
    constructor(n) {
        this.pName = n;
    }
    greet(phrase) {
        console.log(`'${phrase} ${this.pName}'`);
    }
}
let user1;
user1 = new Person('Gerardo');
user1.greet('Hi');
console.log(user1);
//# sourceMappingURL=app.js.map