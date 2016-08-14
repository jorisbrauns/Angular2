import { Component, OnInit } from '@angular/core';
import { Person } from './person-model';
import { PersonService } from './person.service';

@Component({
    templateUrl: './app/person/person.component.html'
})
export class PersonComponent implements OnInit {

    Persons: Person[];

    constructor(private personService:PersonService) { }

    ngOnInit() {
  
    }
}
