import { Component } from '@angular/core';

// Import router directives
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'owic-app',
  templateUrl: './application/application.component/application.compontent.html',
  
   // Tell component to use router directives
  directives: [ROUTER_DIRECTIVES]
})
export class ApplicationComponent {
}
