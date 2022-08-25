"use strict";
//import {StringUtility} from './StringUtility'
exports.__esModule = true;
exports.Employee = void 0;
/// <reference path="StringUtility.ts" />
var Employee = /** @class */ (function () {
    function Employee(name, code) {
        this.empName = StringUtility.ToCapital(name);
        this.empCode = code;
    }
    Employee.prototype.displayEmployee = function () {
        console.log("Employee Code: " + this.empCode + ", Employee Name: " + this.empName);
    };
    return Employee;
}());
exports.Employee = Employee;
var e1 = new Employee("niraj", 234324);
e1.displayEmployee();
