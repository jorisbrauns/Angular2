import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'owic-app',
  templateUrl: './application/application.compontent.html',
  
   // Tell component to use router directives
  directives: [ROUTER_DIRECTIVES]
})
export class ApplicationComponent {
  
}
