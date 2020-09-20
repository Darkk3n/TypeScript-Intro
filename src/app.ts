//Class definition. Just like C#
class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }
}

//Instance. Same instead of var, let is used
let test = new Department('Foo');

console.log(test);