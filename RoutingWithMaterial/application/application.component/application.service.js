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
var http_1 = require('@angular/http');
var ApplicationService = (function () {
    // Class constructor with Jsonp injected
    function ApplicationService(jsonp) {
        this.jsonp = jsonp;
        // Base URL for Petfinder API
        this.petsUrl = 'http://api.petfinder.com/';
        this.apiKey = '38c2ac16b0328940ffe57dee1ce92709';
    }
    // Get a list if pets based on animal
    ApplicationService.prototype.findPets = function (animal) {
        // End point for list of pets:
        // http://api.petfinder.com/pet.find?key=[API_KEY]&animal=[ANIMAL]&format=json&location=texas
        var endPoint = 'pet.find';
        // URLSearchParams makes it easier to set query parameters and construct URL
        // rather than manually concatenating
        var params = new http_1.URLSearchParams();
        params.set('key', this.apiKey);
        params.set('location', 'texas');
        params.set('animal', animal);
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
        // Return response
        return this.jsonp
            .get(this.petsUrl + endPoint, { search: params })
            .map(function (response) { return response.json().petfinder.pets.pet; });
    };
    // get a pet based on their id
    ApplicationService.prototype.findPetById = function (id) {
        // End point for list of pets:
        // http://api.petfinder.com/pet.find?key=[API_KEY]&animal=[ANIMAL]&format=json&location=texas
        var endPoint = 'pet.get';
        // URLSearchParams makes it easier to set query parameters and construct URL
        // rather than manually concatinating
        var params = new http_1.URLSearchParams();
        params.set('key', this.apiKey);
        params.set('id', id);
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
        // Return response
        return this.jsonp
            .get(this.petsUrl + endPoint, { search: params })
            .map(function (response) { return response.json().petfinder.pet; });
    };
    ApplicationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Jsonp])
    ], ApplicationService);
    return ApplicationService;
}());
exports.ApplicationService = ApplicationService;
//# sourceMappingURL=application.service.js.map