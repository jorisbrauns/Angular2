import { Component, ViewEncapsulation } from '@angular/core';
import {Router}from '@angular/router';
import { Person } from './person.model';

@Component({
    moduleId: module.id,
    templateUrl: 'person-list.component.html',
    styleUrls: ['person-list.component.css']
})
export class PersonListComponent {
   
    persons: Person[];

    constructor(private _router: Router) {
        // _router.navigate([ 'about' ]);
    }

}