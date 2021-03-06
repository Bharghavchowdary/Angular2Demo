﻿import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'

@Component({

    selector: "employe",
    template: `You Entered :{{entered}}`


})
export class SimpleComponent implements OnChanges {

    @Input() entered: string;


    ngOnChanges(changes: SimpleChanges) {

        for (let propertyName in changes) {

            let change = changes[propertyName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);
            console.log(propertyName + ': currentValue = '
                + current + ', previousValue = ' + previous);
        }

    }

}