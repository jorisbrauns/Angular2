import { Component, ViewEncapsulation } from '@angular/core';
import { Person } from './person.model';
import { PERSONS } from '../api/person.mocked';
import { SampleComponent } from './sample.component';

@Component({
    moduleId: module.id,
    selector: 'person-list',
    templateUrl: 'person-list.component.html',
    styleUrls: ['person-list.component.css'],
    directives: [SampleComponent]
})
export class PersonListComponent {
    subject:string = "List of persons...";    
    persons: Person[] = PERSONS ;
}