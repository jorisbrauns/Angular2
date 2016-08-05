import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.component/application.service'
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { Pet } from '../models/pet';

@Component({
    template: `
    <div *ngIf="dog">
        <h2>{{dog.name.$t}}</h2>
        <img src="{{dog.media.photos.photo[3].$t}}"/>
        <p><strong>Age: </strong>{{dog.age.$t}}</p>
        <p><strong>Sex: </strong>{{dog.sex.$t}}</p>
        <p><strong>Description: </strong>{{dog.description.$t}}</p>
    </div>
    `,
    // Providers
    providers: [ApplicationService],
    // Directives
    directives: [ROUTER_DIRECTIVES]
})

// Component class implementing OnInit
export class DogDetailsComponent implements OnInit {
    // Private properties for binding
    private sub: any;
    private dog: string[];

    constructor(private applicationService: ApplicationService, private route: ActivatedRoute) {

    }

    // Load data ones componet is ready
    ngOnInit() {
        // Subscribe to route params
        this.sub = this.route.params.subscribe(params => {

            let id = params['id'];

            // Retrieve Pet with Id route param
            this.applicationService.findPetById(id).subscribe(dog => this.dog = dog);
        });
    }

    ngOnDestroy() {
        // Clean sub to avoid memory leak
        this.sub.unsubscribe();
    }
}