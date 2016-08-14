import { Injectable } from '@angular/core';
import { Person } from './person-model';
import { PERSONS } from './mock-persons';

@Injectable()
export class PersonService {
    getPersons() {
        return new Promise<Person[]>(resolve =>
            setTimeout(() => resolve(PERSONS), 2000)
        );
    }
}
