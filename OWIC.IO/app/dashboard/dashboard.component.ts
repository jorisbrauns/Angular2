import { Component, OnInit } from '@angular/core';
import { PersonService} from '../person/person.service';
import { Person } from '../person/person-model';

@Component({
    templateUrl: './app/dashboard/dashboard.component.html',
})
export class DashboardComponent implements OnInit {

    persons: Person[];

    constructor(private personService: PersonService) {
    }

    ngOnInit() {
        this.personService.getPersons().then(persons => this.persons = persons);
        // this.personService.getPersons().then(function (response) {
        //     console.log(response);
        // });
    }

}