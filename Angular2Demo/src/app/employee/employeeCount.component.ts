import { Component,Input,Output,EventEmitter } from '@angular/core';

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
    
    selectedRadioButtonValue: string = 'All';
    
    @Output()
    countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

    onRadioButtonSelectionChange() {
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    }

}