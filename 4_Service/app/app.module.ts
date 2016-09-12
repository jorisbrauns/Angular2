import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }         from './app.component';
import { PersonListComponent }  from './person/person-list.component';
import { OwicPageComponent }    from './owic/owic.component';
import { RoutingModule }        from './app.route';
import { PersonService }        from './person/person.service';

import { HttpModule, XHRBackend }                       from '@angular/http';
import { InMemoryBackendService, SEED_DATA }            from 'angular2-in-memory-web-api';
import { InMemoryDataService }                          from './api/in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    PersonListComponent,
    OwicPageComponent
  ],
  providers: [
    PersonService,
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA, useClass: InMemoryDataService }     // in-mem server data
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
