"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var employee_component_1 = require("./employee/employee.component");
var employeeList_component_1 = require("./employee/employeeList.component");
var forms_1 = require("@angular/forms");
var employeePipe_pipe_1 = require("./employee/employeePipe.pipe");
var employeeCount_component_1 = require("./employee/employeeCount.component");
var simple_component_1 = require("./others/simple.component");
var AppModule1 = /** @class */ (function () {
    function AppModule1() {
    }
    AppModule1 = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, employee_component_1.Employeecomponent, employeeList_component_1.EmployeeList, employeePipe_pipe_1.employeeTitlePipe, employeeCount_component_1.employeeCountclass, simple_component_1.SimpleComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule1);
    return AppModule1;
}());
exports.AppModule1 = AppModule1;
//# sourceMappingURL=app.module.js.map