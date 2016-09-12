import { Component } from '@angular/core';
import { PersonListComponent  } from './person/person-list.component';
import { OwicPageComponent  } from './owic/owic.component';

@Component({
    moduleId: module.id,
    selector: 'owic-app',
    templateUrl: 'app.component.html',
    directives: [PersonListComponent, OwicPageComponent],
})
export class AppComponent {
}

