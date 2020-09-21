//Class definition. Just like C#
abstract class Department {
    //Override base class properties with protected
    protected employees: string[] = [];

    constructor(public readonly id: string, public name: string) {
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

    static createEmployee(empName: string) {
        return { name: empName }
    }

    //Abstract method
    abstract describe(this: Department): void
}

const emp = Department.createEmployee('Foo');

//Instance. Same instead of var, let is used
// let test = new Department('1', 'Foo');
// console.log('First Name');
// console.log(test.name);

//Usage of class method
// test.changeName('New Departement name');
// console.log('Name after calling class method');
// console.log(test.name);


//Inheritance
//Defined with "extends"
//Call base constructor with "super" BEFORE anything else
//This referes to "base" ctor in C#
class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe(this: Department): void {
        console.log(`'${this.name} - ${this.id}'`)
    }
}

let dep = new ITDepartment('2', ['Gerardo']);
console.log(dep);
dep.describe();

class AccountingDepartment extends Department {
    private lastReport: string;
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    describe(this: Department): void {
        console.log(`'${this.name} - ${this.id}'`)
    }

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }

    //It's like a method
    set mostRecentReport(lastRep: string) {
        if (!lastRep) {
            throw new Error('No report sent');
        }
        this.addReport(lastRep);
    }


    addReport(report: string) {
        this.lastReport = report;
    }

    addEmployee(name: string) {
        if (name === 'Gerardo') {
            return;
        }
        this.employees.push(name);
    }
}

let acct = new AccountingDepartment('3', ['Report1']);
acct.addEmployee('Gera');
acct.addEmployee('Gerardo');
acct.printEmployeeInfo();
acct.describe();

console.log(acct.mostRecentReport);
