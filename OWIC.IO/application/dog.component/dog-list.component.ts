import { ApplicationService } from '../application.service'
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'dog',
  templateUrl: './application/dog.component/dog-list.component.html',
  // Providers
  providers: [ApplicationService],
  // Directives
  directives: [ROUTER_DIRECTIVES]
})
export class DogListComponent implements OnInit {

  // Private property for binding
  dogs: Observable<string[]>;

  constructor(private applicationService: ApplicationService) { }

  // Load data ones componet is ready
  ngOnInit() {
    // Pass retreived pets to the property
    this.dogs = this.applicationService.findPets('dog');
  }
}