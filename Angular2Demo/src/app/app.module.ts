import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Employeecomponent } from './employee/employee.component';
import { EmployeeList } from './employee/employeeList.component';
import { FormsModule } from '@angular/forms';
import { employeeTitlePipe } from './employee/employeePipe.pipe';
import { employeeCountclass } from './employee/employeeCount.component';
import { SimpleComponent } from './others/simple.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, Employeecomponent, EmployeeList, employeeTitlePipe, employeeCountclass, SimpleComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule1 { }
