import { Component } from '@angular/core'

@Component({
    selector: "list-Employee",
    templateUrl: "./employeeList.component.html",
    styleUrls: ["app/employee/employeeList.css"]

})
export class EmployeeList {
    employees: any[];

    constructor() {
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
            ]
    }
    getEmployees(): void {
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


    }
    trackByEmpCode(index: number, employee: any): string {
        return employee.code;
    }


    getTotalEmployeesCount(): number {
        return this.employees.length;

    }
    getMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === "Male").length;
    }
    getFemaleEmployeesCount(): number {
        return this.employees.filter(g => g.gender === "Female").length;

    }
    selectedEmployeeCountRadioButton: string = 'All';
    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }
}

