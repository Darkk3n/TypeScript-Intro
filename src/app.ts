interface Named {
    readonly name: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}


class Person implements Greetable {
    name: string;
    constructor(n: string) {
        this.name = n;
    }

    greet(phrase: string): void {
        console.log(`'${phrase} ${this.name}'`)
    }
}

let user1: Greetable;
user1 = new Person('Gerardo');

user1.greet('Hi');
console.log(user1);