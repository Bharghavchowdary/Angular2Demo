"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var EmployeeList = (function () {
    function EmployeeList() {
        this.selectedEmployeeCountRadioButton = 'All';
        this.employees =
            [
                {
                    code: 'emp101', name: 'Tom', gender: 'Male',
                    annualSalary: 5500, dateOfBirth: '6/25/1988'
                },
                {
                    code: 'emp102', name: 'Alex', gender: 'Male',
                    annualSalary: 5700.95, dateOfBirth: '9/6/1982'
                },
                {
                    code: 'emp103', name: 'Mike', gender: 'Male',
                    annualSalary: 5900, dateOfBirth: '12/8/1979'
                },
                {
                    code: 'emp104', name: 'Mary', gender: 'Female',
                    annualSalary: 6500.826, dateOfBirth: '10/14/1980'
                },
                {
                    code: 'emp105', name: 'Steve', gender: 'Female',
                    annualSalary: 7700.481, dateOfBirth: '11/18/1979'
                },
                {
                    code: 'emp106', name: 'Steve obs', gender: 'Male',
                    annualSalary: 7700.481, dateOfBirth: '11/18/1979'
                },
            ];
    }
    EmployeeList.prototype.getEmployees = function () {
        this.employees = [
            {
                code: 'emp101', name: 'Tom', gender: 'Male',
                annualSalary: 5500, dateOfBirth: '25/6/1988'
            },
            {
                code: 'emp102', name: 'Alex', gender: 'Male',
                annualSalary: 5700.95, dateOfBirth: '9/6/1982'
            },
            {
                code: 'emp103', name: 'Mike', gender: 'Male',
                annualSalary: 5900, dateOfBirth: '12/8/1979'
            },
            {
                code: 'emp104', name: 'Mary', gender: 'Female',
                annualSalary: 6500.826, dateOfBirth: '14/10/1980'
            },
            {
                code: 'emp105', name: 'Steve', gender: 'Female',
                annualSalary: 7700.481, dateOfBirth: '11/18/1979'
            },
            {
                code: 'emp106', name: 'Steve obs', gender: 'Male',
                annualSalary: 7700.481, dateOfBirth: '11/18/1979'
            },
        ];
    };
    EmployeeList.prototype.trackByEmpCode = function (index, employee) {
        return employee.code;
    };
    EmployeeList.prototype.getTotalEmployeesCount = function () {
        return this.employees.length;
    };
    EmployeeList.prototype.getMaleEmployeesCount = function () {
        return this.employees.filter(function (e) { return e.gender === "Male"; }).length;
    };
    EmployeeList.prototype.getFemaleEmployeesCount = function () {
        return this.employees.filter(function (g) { return g.gender === "Female"; }).length;
    };
    EmployeeList.prototype.onEmployeeCountRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    };
    return EmployeeList;
}());
EmployeeList = __decorate([
    core_1.Component({
        selector: "list-Employee",
        templateUrl: "./employeeList.component.html",
        styleUrls: ["app/employee/employeeList.css"]
    }),
    __metadata("design:paramtypes", [])
], EmployeeList);
exports.EmployeeList = EmployeeList;
//# sourceMappingURL=employeeList.component.js.map