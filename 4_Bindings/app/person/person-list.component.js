"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var person_mocked_1 = require('./person.mocked');
var person_detail_component_1 = require('./person-detail.component');
var PersonListComponent = (function () {
    function PersonListComponent(_router) {
        this._router = _router;
        this.selectedPerson = null;
        this.persons = person_mocked_1.PERSONS;
    }
    PersonListComponent.prototype.onSelect = function (person, event) {
        // this.selectedPerson = person;
        event.stopPropagation();
        this._router.navigate(['/detail', person.id]);
    };
    PersonListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'person-list.component.html',
            styleUrls: ['person-list.component.css'],
            directives: [
                person_detail_component_1.PersonDetailComponent
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], PersonListComponent);
    return PersonListComponent;
}());
exports.PersonListComponent = PersonListComponent;
//# sourceMappingURL=person-list.component.js.map