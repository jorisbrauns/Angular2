import { ApplicationService } from '../application.service'
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'cat',
  templateUrl: './application/cat.component/cat-list.component.html',
  // Providers
  providers: [ApplicationService],
  // Directives
  directives: [ROUTER_DIRECTIVES]
})
export class CatListComponent implements OnInit {

  // Private property for binding
  cats: Observable<string[]>;

  constructor(private applicationService: ApplicationService) { }

  // Load data ones componet is ready
  ngOnInit() {
    // Pass retreived pets to the property
    this.cats = this.applicationService.findPets('cat');
  }
}