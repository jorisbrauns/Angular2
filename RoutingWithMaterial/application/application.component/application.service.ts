import { Injectable }    from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

@Injectable()
export class ApplicationService {

    // Class constructor with Jsonp injected
    constructor(private jsonp: Jsonp) { }

    // Base URL for Petfinder API
    private petsUrl = 'http://api.petfinder.com/';
    private apiKey = '38c2ac16b0328940ffe57dee1ce92709';

    // Get a list if pets based on animal
    findPets(animal: string) {

        // End point for list of pets:
        // http://api.petfinder.com/pet.find?key=[API_KEY]&animal=[ANIMAL]&format=json&location=texas
        const endPoint = 'pet.find'

        // URLSearchParams makes it easier to set query parameters and construct URL
        // rather than manually concatenating
        let params = new URLSearchParams();
        params.set('key', this.apiKey);
        params.set('location', 'texas');
        params.set('animal', animal);
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');

        // Return response
        return this.jsonp
            .get(this.petsUrl + endPoint, { search: params })
            .map(response => <string[]>response.json().petfinder.pets.pet);
    }

    // get a pet based on their id
    findPetById(id: string) {

        // End point for list of pets:
        // http://api.petfinder.com/pet.find?key=[API_KEY]&animal=[ANIMAL]&format=json&location=texas
        const endPoint = 'pet.get'

        // URLSearchParams makes it easier to set query parameters and construct URL
        // rather than manually concatinating
        let params = new URLSearchParams();
        params.set('key', this.apiKey);
        params.set('id', id);
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');

        // Return response
        return this.jsonp
            .get(this.petsUrl + endPoint, { search: params })
            .map(response => <string[]>response.json().petfinder.pet);
    }

}