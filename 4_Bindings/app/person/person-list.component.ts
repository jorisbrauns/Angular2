import { Component, ViewEncapsulation } from '@angular/core';
import {Router}from '@angular/router';
import { Person } from './person.model';
import { PERSONS } from './person.mocked';
import { PersonDetailComponent } from './person-detail.component';

@Component({
    moduleId: module.id,
    templateUrl: 'person-list.component.html',
    styleUrls: ['person-list.component.css'],
    directives: [
        PersonDetailComponent
    ]
})
export class PersonListComponent {
    
    constructor(private _router: Router) {
    }

    selectedPerson: Person = null;
    persons: Person[] = PERSONS;

    onSelect (person: Person, event){
        this.selectedPerson = person;
        // event.stopPropagation();
        // this._router.navigate(['/detail', person.id]);
    }

}