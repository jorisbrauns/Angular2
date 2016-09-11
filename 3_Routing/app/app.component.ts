import { Component } from '@angular/core';
import { PersonComponent  } from './person/person.component';
import { OwicPageComponent} from './owic/owic.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello World!</h1>
        <person></person>
        <owic-page></owic-page>
    `,
    styles: [`
    h1 {
        color: green;
    }
  `],
    directives: [PersonComponent, OwicPageComponent]
})
export class AppComponent {
}
