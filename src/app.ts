//Class definition. Just like C#
class Department {
    private employees: string[] = [];

    constructor(private id: string, public name: string) {
    }

    //Declare a new class method
    //Instead of starting with function just put the name of the method (camelCase)
    //And the parameters needed
    changeName(newName: string) {
        this.name = newName;
    }

    addEmployee(employeeName: string) {
        this.employees.push(employeeName);
    }

    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

//Instance. Same instead of var, let is used
let test = new Department('1', 'Foo');
console.log('First Name');
console.log(test.name);

//Usage of class method
test.changeName('New Departement name');
console.log('Name after calling class method');
console.log(test.name);


test.addEmployee('Gera');
test.addEmployee('Aguilar');
test.printEmployeeInfo();