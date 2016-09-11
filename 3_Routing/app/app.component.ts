import { Component } from '@angular/core';
import { PersonComponent  } from './person/person.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello World!</h1>
        <person></person>
    `,
    styles: [`
    h1 {
        color: green;
    }
  `],
    directives: [PersonComponent],
})
export class AppComponent {
}

