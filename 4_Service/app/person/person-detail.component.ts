import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Person } from './person.model';
import { PersonService } from './person.service';

@Component({
    moduleId: module.id,
    selector: 'person-detail',
    templateUrl: 'person-detail.component.html'
})
export class PersonDetailComponent implements OnInit {

    error: string;
    person: Person;
    submitted: boolean;

    constructor(private _route: ActivatedRoute, private _personService: PersonService) {
    }

     ngOnInit() {
        this._route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                let id = params['id'];
                this._personService.getPerson(id).then( result => this.person = result );
            } 
        });
    }

    save() {
        this.submitted = true; 
        this._personService
            .save(this.person)
            .then(person => {
                this.person = person;
            })
            .catch(error => this.error = error);
    }
}