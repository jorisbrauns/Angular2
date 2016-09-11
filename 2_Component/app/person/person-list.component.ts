import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'person-list',
    templateUrl: './app/person/person-list.component.html',
    styleUrls: ['./app/person/person-list.component.css'],
    //encapsulation: ViewEncapsulation.Native,
    //encapsulation: ViewEncapsulation.None
    encapsulation: ViewEncapsulation.Emulated // default 
})
export class PersonListComponent {
    persons: string[]
}