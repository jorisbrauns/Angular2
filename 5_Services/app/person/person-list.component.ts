import { Component, OnInit } from '@angular/core';
import {Router}from '@angular/router';
import { Person } from './person.model';
import { PERSONS } from './person.mocked';
import { PersonDetailComponent } from './person-detail.component';
import { PersonService } from './person.service';

@Component({
    moduleId: module.id,
    templateUrl: 'person-list.component.html',
    styleUrls: ['person-list.component.css'],
    directives: [
        PersonDetailComponent
    ]
})
export class PersonListComponent implements OnInit {
    
    constructor(private _router: Router, private _personService: PersonService) {
    }

    selectedPerson: Person = null;
    persons: Person[];

    onSelect (person: Person, event){
        this.selectedPerson = person;
        // event.stopPropagation();
        // this._router.navigate(['/detail', person.id]);
    }

    ngOnInit(){
        this._personService.getPersons().then( result => this.persons = result );
    }

}