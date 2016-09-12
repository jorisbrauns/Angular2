import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Person } from './person.model';

@Component({
    moduleId: module.id,
    selector: 'person-detail',
    templateUrl: 'person-detail.component.html'
})
export class PersonDetailComponent implements OnInit {

    person: Person;
    userId: string;

    constructor(private _route: ActivatedRoute) {
    }

     ngOnInit() {
        this._route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                let id = params['id'];
                this.userId = id;
            } 
        });
    }
}