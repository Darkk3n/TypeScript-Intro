//Class definition. Just like C#
class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    //Declare a new class method
    //Instead of starting with function just put the name of the method (camelCase)
    //And the parameters needed
    changeName(newName: string) {
        this.name = newName;
    }
}

//Instance. Same instead of var, let is used
let test = new Department('Foo');
console.log('First Name');
console.log(test.name);

//Usage of class method
test.changeName('New Departement name');
console.log('Name after calling class method');
console.log(test.name);