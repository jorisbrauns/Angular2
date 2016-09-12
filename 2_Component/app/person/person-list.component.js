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
var person_mocked_1 = require('../api/person.mocked');
var test_component_1 = require('./test.component');
var PersonListComponent = (function () {
    function PersonListComponent() {
        this.subject = "List of persons...";
        this.persons = person_mocked_1.PERSONS;
    }
    PersonListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'person-list',
            templateUrl: 'person-list.component.html',
            styleUrls: ['person-list.component.css'],
            directives: [test_component_1.TestComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], PersonListComponent);
    return PersonListComponent;
}());
exports.PersonListComponent = PersonListComponent;
//# sourceMappingURL=person-list.component.js.map