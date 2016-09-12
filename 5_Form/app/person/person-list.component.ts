import { Component, ViewEncapsulation } from '@angular/core';
import { Router }from '@angular/router';
import { Person } from './person.model';
import { PERSONS } from '../api/person.mocked';
import { PersonService } from './person.service';

@Component({
    moduleId: module.id,
    templateUrl: 'person-list.component.html',
    styleUrls: ['person-list.component.css']
})
export class PersonListComponent {

    persons: Person[];

    constructor(private _router: Router, private _personService: PersonService) {
        _personService.getPersons().then( result => this.persons = result );
    }

    onClickPerson(person: Person) {
        this._router.navigate(['detail', person.id]);
    }

}