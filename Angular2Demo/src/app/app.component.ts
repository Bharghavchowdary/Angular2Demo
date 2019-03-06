import { Component } from '@angular/core';

@Component({
    selector: 'my-app1',
    templateUrl: `./app.component.html`,

})

export class AppComponent {
    applyBoldClass: boolean = true;
    firstName: string = 'Hello<script>alert("Hacked");</script> World';
    lastName: string = '';
    imagePath: string = 'http://pragimtech.com/images/logo.jpg';
    isDisabled: boolean = false;
    classesToApply: string = 'italicsClass boldClass colorClass';
    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
    onClick(): void {
        console.log("Button Clicked");
    }
    name: string = 'Tom';
    }