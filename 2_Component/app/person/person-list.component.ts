import { Component, ViewEncapsulation } from '@angular/core';
import { Person } from './person.model';
import { PERSONS } from '../api/person.mocked';
import { TestComponent } from './test.component';

@Component({
    moduleId: module.id,
    selector: 'person-list',
    templateUrl: 'person-list.component.html',
    styleUrls: ['person-list.component.css'],
    directives: [TestComponent]
})
export class PersonListComponent {
    subject:string = "List of persons...";    
    persons: Person[] = PERSONS ;
}