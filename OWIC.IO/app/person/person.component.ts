import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from './person-model';
import { PersonService } from './person.service';

@Component({
    templateUrl: './app/person/person.component.html'
})
export class PersonComponent implements OnInit {

    constructor(private personService: PersonService) { }

    ngOnInit() {

    }
}
