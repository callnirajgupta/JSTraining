"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emp = void 0;
class Emp {
    constructor(name, age, salary, desination) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.desination = desination;
    }
    display() {
        if (this.desination) {
            console.log(`name ${this.name} an desination ${this.desination}`);
        }
        else {
            console.log(`name ${this.name}`);
        }
    }
}
exports.Emp = Emp;
