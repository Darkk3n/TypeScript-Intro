interface Greetable {
    pName: string;

    greet(phrase: string): void;
}


class Person implements Greetable {
    pName: string;
    constructor(n: string) {
        this.pName = n;
    }

    greet(phrase: string): void {
        console.log(`'${phrase} ${this.pName}'`)
    }
}

let user1: Greetable;
user1 = new Person('Gerardo');

user1.greet('Hi');
console.log(user1);