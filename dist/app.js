"use strict";
//Class definition. Just like C#
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //Override base class properties with protected
        this.employees = [];
    }
    //Declare a new class method
    //Instead of starting with function just put the name of the method (camelCase)
    //And the parameters needed
    changeName(newName) {
        this.name = newName;
    }
    addEmployee(employeeName) {
        this.employees.push(employeeName);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    static createEmployee(empName) {
        return { name: empName };
    }
}
const emp = Department.createEmployee('Foo');
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
//Inheritance
//Defined with "extends"
//Call base constructor with "super" BEFORE anything else
//This referes to "base" ctor in C#
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
let dep = new ITDepartment('2', ['Gerardo']);
console.log(dep);
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }
    //It's like a method
    set mostRecentReport(lastRep) {
        if (!lastRep) {
            throw new Error('No report sent');
        }
        this.addReport(lastRep);
    }
    addReport(report) {
        this.lastReport = report;
    }
    addEmployee(name) {
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
console.log(acct.mostRecentReport);
acct.mostRecentReport = '';
//# sourceMappingURL=app.js.map