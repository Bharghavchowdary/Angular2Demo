import { Component } from "@angular/core";

@Component({

    selector: "my-employee",
    templateUrl: "app/employee/employee.component.html",
    styles: ['table { color: #369; font-family: Arial, Helvetica, sans-serif; font-size: large; border-collapse: collapse;}', 'td {border: 1px solid black; }']
})
export
    class Employeecomponent {
    columnSpan: number = 2;
    firstName: string = 'Tom';
    lastName: string = 'Hopkins';
    gender: string = 'Male';
    age: number = 20;
    showDetails: boolean = false;
    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }
}
