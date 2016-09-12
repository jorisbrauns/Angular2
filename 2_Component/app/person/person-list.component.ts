import { Component, ViewEncapsulation } from '@angular/core';
import { Person } from './person.model';

@Component({
    moduleId: module.id,
    selector: 'person-list',
    templateUrl: 'person-list.component.html',
    styleUrls: ['person-list.component.css']
})
export class PersonListComponent {
    persons: Person[];
}