import { Component,Input } from '@angular/core';

@Component({

    selector: "employeeCount",   
    templateUrl: "./employeeCount.component.html",
     styleUrls: ["app/employee/employeeList.css"]

})
export class employeeCountclass {
    @Input()
    all: number;
    @Input()
    male: number;
    @Input()
    female: number;



}