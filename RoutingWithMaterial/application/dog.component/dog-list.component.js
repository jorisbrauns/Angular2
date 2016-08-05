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
var application_service_1 = require('../application.component/application.service');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var DogListComponent = (function () {
    function DogListComponent(applicationService) {
        this.applicationService = applicationService;
    }
    // Load data ones componet is ready
    DogListComponent.prototype.ngOnInit = function () {
        // Pass retreived pets to the property
        this.dogs = this.applicationService.findPets('dog');
    };
    DogListComponent = __decorate([
        core_1.Component({
            selector: 'dog',
            templateUrl: './application/dog.component/dog-list.component.html',
            // Providers
            providers: [application_service_1.ApplicationService],
            // Directives
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [application_service_1.ApplicationService])
    ], DogListComponent);
    return DogListComponent;
}());
exports.DogListComponent = DogListComponent;
//# sourceMappingURL=dog-list.component.js.map