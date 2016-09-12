import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Person } from './person.model';

@Component({
    moduleId: module.id,
    selector: 'person-detail',
    templateUrl: 'person-detail.component.html'
})
export class PersonDetailComponent implements OnInit {

    @Input() person: Person;

    constructor(private route: ActivatedRoute) {  }

    ngOnInit() {
        this.route.params.forEach((params: Params) => { 
            // if (params['id'] !== undefined) {
            //     let id = params['id'];
            // } else {
            //     this.person = new Person("","","",0,"");
            // }
        });
    }


}