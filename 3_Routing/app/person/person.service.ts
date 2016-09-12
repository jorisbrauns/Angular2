import { Injectable } from '@angular/core';             
import { Person } from './person.model';                
import { PERSONS } from './person.mocked';              
import { Http, Response, Headers } from '@angular/http';
                                                        
@Injectable()                                           
export class PersonService {                            
                                                        
    constructor(private _http: Http) { }                 
                                                        
    // Get all persons from mocked constant data         
    getPersons() {                                       
        return new Promise<Person[]>(resolve =>          
            setTimeout(() => resolve(PERSONS), 1000)     
        );                                               
    }                                                    
                                                        
}                                                       