import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'person',
    templateUrl: './app/person/person.component.html',
    styleUrls: ['./app/person/person.component.css'],
    //encapsulation: ViewEncapsulation.Native,
    //encapsulation: ViewEncapsulation.None
    encapsulation: ViewEncapsulation.Emulated // default 
})
export class PersonComponent {
    name: string = 'Joris Brauns';
}