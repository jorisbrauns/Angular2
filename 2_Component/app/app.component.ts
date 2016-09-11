import { Component } from '@angular/core';
import { PersonListComponent  } from './person/person-list.component';

@Component({
    selector: 'owic-app',
    templateUrl: './app/app.component.html',
    directives: [PersonListComponent],
})
export class AppComponent {
}

