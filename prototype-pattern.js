/* The Prototype Pattern is a creational design pattern that allows you to create objects based on a prototype or template object.
 It's used to create new instances by copying the properties and methods from an existing object */

function Developer(name) {
    this.name = name;
    this.role = "Devloper";

    this.getRole = function () {
        return this.role
    }
}

Developer.prototype.employeeInfo = function () {
    return {
        name: this.name,
        role: this.role
    }
}

function Tester(name) {
    this.name = name;
    this.role = "Tester";

    Developer.call(this, name);

}

Tester.prototype = Object.create(Developer.prototype);
Tester.prototype.constructor = Tester;



const developer = new Developer("Dhanush");
const tester = new Tester("Ajith");

console.log(developer.getRole())
console.log(developer.employeeInfo())

console.log(tester.getRole())
console.log(tester.employeeInfo())

