// factory pattern is a creational design pattern that uses factory methods to create objects 
// factory functions simply creates an object and returns it.

class Devloper {
    name = "";
    type = "Devloper"

    constructor(name) {
        this.name = name;
    }

    say() {
        console.log(`Hi i'm ${this.name} & i'm ${this.type}`)
    }

}

class Tester {
    name = "";
    type = "Tester"

    constructor(name) {
        this.name = name;
    }

    say() {
        console.log(`Hi i'm ${this.name} & i'm ${this.type}`)
    }

}

class Analyst {
    name = "";
    type = "Analyst"

    constructor(name) {
        this.name = name;
    }

    say() {
        console.log(`Hi i'm ${this.name} & i'm ${this.type}`)
    }

}

class EmployeeFactory {
    create(name, type) {
        switch (type) {
            case 1:
                return new Devloper(name);
            case 2:
                return new Tester(name);
            case 3:
                return new Analyst(name);
            default:
                break;
        }
    }
}

const employeeFactory = new EmployeeFactory();
const employees = [];
employees.push(employeeFactory.create("Ajith", 1));
employees.push(employeeFactory.create("Vijay", 2));

console.log(employees)