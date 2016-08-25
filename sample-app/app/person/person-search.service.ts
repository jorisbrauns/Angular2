import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Person }           from './person-model';

@Injectable()
export class PersonSearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Person[]> {
    return this.http
               .get(`app/persons/?firstName=${term}`)
               .map((r: Response) => r.json().data as Person[]);
  }
}
