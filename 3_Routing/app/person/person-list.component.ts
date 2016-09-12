import { Component, ViewEncapsulation } from '@angular/core';
import { Router }from '@angular/router';
import { Person } from './person.model';
import { PERSONS } from '../api/person.mocked';

@Component({
    moduleId: module.id,
    templateUrl: 'person-list.component.html',
    styleUrls: ['person-list.component.css']
})
export class PersonListComponent {

    persons: Person[] = PERSONS;

    constructor(private _router: Router) {
    }

    onClickPerson(person: Person) {
        this._router.navigate(['detail', person.id]);
    }

}